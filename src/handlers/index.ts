import { RequestHandler } from 'express'

import { REPO_URL, TIMEOUT } from '~/config'
import { numOfFrames } from '~/libs/generateFrame'
import { pop } from '~/libs/pop'
import { queryParamSchema } from '~/models/queryParam'
import { exists, isCurl } from '~/utils'

export const indexHandler: RequestHandler = async (req, res) => {
  const userAgent = req.headers['user-agent']
  if (exists(userAgent) && !isCurl(userAgent)) {
    res.redirect(302, REPO_URL)

    return res.end()
  }

  const queryParam = queryParamSchema.safeParse(req.query)
  if (!queryParam.success) {
    console.log('%o', queryParam.error)
    res.redirect(302, REPO_URL)

    return res.end()
  }

  res.writeHead(200, {
    'Content-Type': 'text/plain',
  })

  const { flip, t } = queryParam.data

  const counter = (function* () {
    let count = 0
    while (true) {
      count = ++count % numOfFrames
      yield count
    }
  })()

  const timerId = setInterval(() => {
    const next = counter.next()
    if (next.done) {
      clearInterval(timerId)
      res.end()
    } else {
      pop({ res, flip, index: next.value })
    }
  }, t)

  setTimeout(() => {
    clearInterval(timerId)
    res.end()
  }, TIMEOUT)
}

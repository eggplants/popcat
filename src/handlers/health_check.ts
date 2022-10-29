import { RequestHandler } from 'express'

export const healthCheckHandler: RequestHandler = async (_req, res) => {
  res.status(200).send({ message: 'OK' })
}

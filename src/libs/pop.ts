import { generateFrame } from './generateFrame'

import type { Response } from 'express'

type PopProps = {
  flip?: boolean
  index: number
  res: Response
}

export const pop = ({ flip, index, res }: PopProps) => {
  res.write('\x1B[2J\x1B[3J\x1B[H')
  res.write(generateFrame(index, flip))
}

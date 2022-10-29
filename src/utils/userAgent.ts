import { exists } from './typeGuard'

export const isCurl = (userAgent: string) => exists(userAgent.match(/^curl.*/i))

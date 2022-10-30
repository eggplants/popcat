import express from 'express'

import { healthCheckHandler } from './health_check'
import { rootHandler } from './root'

const router = express.Router()

router.get('/', rootHandler)
router.get('/health_check', healthCheckHandler)

export default router

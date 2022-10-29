import express from 'express'
import morgan from 'morgan'

import { PORT } from '~/config'
import { indexHandler } from '~/handlers/index'

import { healthCheckHandler } from './handlers/health_check'

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('combined'))

// Route
const router = express.Router()
router.get('/', indexHandler)
router.get('/health_check', healthCheckHandler)

app.use(router)

if (!process.env.DETA_RUNTIME) {
  app.listen(PORT, () => console.log(`listening on port http://localhost:${PORT}`))
}

module.exports = app

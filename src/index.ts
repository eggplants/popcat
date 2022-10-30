import express from 'express'
import morgan from 'morgan'

import { PORT } from '~/config'
import router from '~/routes'

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('combined'))
app.use(router)

if (!process.env.DETA_RUNTIME) {
  app.listen(PORT, () => console.log(`listening on port http://localhost:${PORT}`))
}

module.exports = app

import express from 'express'
import dotenv from 'dotenv'

import { router as qrCodeRouter } from './routes/qrcode'

dotenv.config()

const app = express()
app.use(express.json())
app.use('/qrcode', qrCodeRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`)
})

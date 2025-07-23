import { Router } from 'express'
import QRCode from 'qrcode'
import fs from 'fs'
import path from 'path'

export const router = Router()

const tmpDir = path.join(__dirname, '..', '..', 'tmp')

// Cria a pasta tmp se não existir
if (!fs.existsSync(tmpDir)) {
  fs.mkdirSync(tmpDir)
}

router.post('/', async (req, res) => {
  const { text } = req.body

  if (!text) {
    return res.status(400).json({ error: 'Texto é obrigatório' })
  }

  try {
    const fileName = `qrcode-${Date.now()}.png`
    const filePath = path.join(__dirname, '..', '..', 'tmp', fileName)

    await QRCode.toFile(filePath, text)

    res.sendFile(filePath)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erro ao gerar o QR Code' })
  }
})

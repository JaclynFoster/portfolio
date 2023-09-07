const express = require('express')
const cors = require('cors')
const { json } = require('body-parser')
require('dotenv').config()
const serverless = require("serverless-http")
const port = process.env.SERVER_PORT

const app = express()

app.use(express.static(`${__dirname}/../public`))
app.use(json())
app.use(cors())


const path = require('path')
const { sendMail } = require('./controllers/GmailController')
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'))
})
app.post('/mail/sendMail', sendMail)

module.exports.handler = serverless(app)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

const express = require('express')
const app = express()
const port = 4000
require('dotenv').config();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('twitter Id')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please Login</h1>')
})
app.get('/youtube', (req, res) => {
    res.send('<h1>Youtube</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
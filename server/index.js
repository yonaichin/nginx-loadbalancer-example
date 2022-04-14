const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const serverNum = process.env.SRV || 'ghost'

app.get('/', (req, res) => {
  res.send(`Server ${serverNum}`)
})

app.listen(port, () => {
  console.log('server running on port:', port)
})

const express = require('express')
const app = express()
const route = require('./routes/router')
const port = 3000
const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', route)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.listen(port, () => {
  console.log('Listening on port', port)
})

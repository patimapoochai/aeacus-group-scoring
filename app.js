const express = require('express')
const app = express()
const port = 80

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))

app.post('/update', (req, res) => {
  res.send('Hello from /update post!')
  console.log('Hello from /update post!')
  console.log(req.body)
})

app.get('/status/alanteam1/bletchley-park', (req, res) => {
  res.status(200).json({ message: 'test' })
  console.log('Hello from /status get!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


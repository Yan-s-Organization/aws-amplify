const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname + "\\js"))
app.use(express.static(__dirname + "\\css"))
app.use(express.static(__dirname + "\\assets"))
app.use(express.static(__dirname))
app.set('views', __dirname)
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
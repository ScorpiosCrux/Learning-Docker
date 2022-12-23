const express = require('express')
var bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', (req, res) => {
	res.sendFile('index.html', {root: __dirname })
})

app.post('/', (req, res) => {
	const name = req.body
	res.send(`Got your response!`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
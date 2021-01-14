const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())

app.get('/api/:info1/:info2', (req, res) => {
	const info1 = req.params.info1
	const info2 = req.params.info2
	const API = `http://bad-api-assignment.reaktor.com/v2/${info1}/${info2}`;
	axios(API)
		.then(response => {
			res.json(response.data)
		}).catch(err => {
 			res.send('errr!!!')
		})
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
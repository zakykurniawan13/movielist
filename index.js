const express = require('express')
const app = express()
const routes = require('./routes')
const port = 2000

app.use('/', routes)

app.listen(port, ()=> {console.log('server is running on port:', port)})

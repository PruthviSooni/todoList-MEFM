const express = require('express')
const app = express()
const todo = require('../backend/routes/todos.js')
const auth = require('../backend/routes/auth.js')
const port = process.env.PORT || 8080
// TODO Controller
app.use('/api/v1', todo)
// Auth Controller
app.use('/api/v1', auth)

app.listen(port, () => { console.log(`Server is listening at port ${port} `) })
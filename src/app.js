const routes = require('./routes')
const mongoose = require('mongoose')
const axios = require('axios')
const core = require('core')
mongoose.connect()

app.use(routes())
app(express.json())
app.listen(3333)

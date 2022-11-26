/*
https://github.com/uisproject/tutorial_nodejs_expressjs_by_johnsmilga/blob/master/02-express-tutorial/final/06-basic-json.js
*/

const { application } = require('express')
const logger = require('./2_express_middleware')

app.use('/api', logger)

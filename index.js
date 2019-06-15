'use strict'

const serverless = require('serverless-http');
const express = require('express')
const app = express()

app.use(express.static('public'))


module.exports.handler = serverless(app);
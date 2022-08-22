const path = require('path')
const express = require('express')
const cors = require('cors')

const apiServer = require('./apiServer')

const server = express()

server.use(cors())
server.use(express.json())
//server.use(express.static(path.join(__dirname, './public')))

server.use('/api', apiServer)

module.exports = server

const express = require("express")
const controller = require("./users.controller.js")
const middleware = require("./users.middleware.js/index.js")
const bodyParser = require("body-parser")

const usersRoute = express.Router()

usersRoute.use(bodyParser.json())

usersRoute.post("/", middleware.checkBody, controller.createUser)


module.exports = usersRoute


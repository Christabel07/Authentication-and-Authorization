const express = require("express")
const bodyParser = require(body-parser)
const controller = require("../controller")
const globalMiddleware = require("../global.middleware")

const itemsRoute = express.Router()

itemsRoute.use(bodyParser.json())

itemsRoute.get("/", globalMiddleware.checkApi_key, controller.getItems)

itemsRoute.get("/:id", globalMiddleware.checkApi_key, controller.getOneItem)

itemsRoute.post("/", globalMiddleware.checkApi_key, globalMiddleware.checkAdmin, globalMiddleware.checkItem, controller.postItem)

itemsRoute.put("/:id", globalMiddleware.checkApi_key, globalMiddleware.checkAdmin, controller.updateItem)

itemsRoute.delete("/:id", globalMiddleware.checkApi_key,globalMiddleware.checkAdmin, controller.deleteItem)


module.exports = itemsRoute
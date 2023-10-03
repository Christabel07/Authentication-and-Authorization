const express = require ("express")

const itemsRoute = require("./routes/items.js")
const usersRoute = require("./users/users.routes.js")

const app = express()
const PORT = 3000

app.use("/items", itemsRoute)
app.use("/users", usersRoute)

app.listen(PORT, () => {
    console.log(`app has started running succesfully at http://localhost:${PORT}`)
})




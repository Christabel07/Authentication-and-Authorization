const fs = require("fs")

const createUser = (req, res) =>{
const userData = fs.readFileSync("./db/users.json")
const userDb = JSON.parse(userData)

const newUser = req.body

newUser.api_key = `${newUser.username}_${newUser.password}`

if(newUser.username === "Christabel"){
    newUser.user_type = "admin"
} 
else{newUser.user_type = "user"}

userDb.push(newUser)

fs.writeFile(",/db/users.json", JSON.stringify(userDb), (err)=>{
    if (err){
        res.status(500).json({
            message: "internal server error"
        })
    }
    res.status(200).json(newUser)
})

}
module.exports = {createUser}


const checkBody = (req, res, next) => {
    if(!req.body.usermame || !req.body.username.trim()){
        return res.status(401).json({
            message: "username is required"
        })
    }
    if(!req.body.password || !req.body.password.trim()){
        return res.status(401).json({
            message: "password is required"
        })
    }
    next()
}

module.exports = {checkBody}




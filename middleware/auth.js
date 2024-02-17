function checkAuthentication(req,res,next){
    let loggedIn = true
    if(loggedIn){
        next()
    }
    else{
        res.status(401).send("Not Logged IN")
    }
}

function checkValidation(req,res,next){
    let validRole=true
    if(validRole){
        next()
    }else{
        res.status(403).send("The user donot have the right")
    }
}

module.exports={
    checkAuthentication,
    checkValidation
}
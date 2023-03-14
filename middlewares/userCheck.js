const User = require("../validation/userSchemajs")
const jwt = require('jsonwebtoken');

exports.validateUser = async (req, res, next) => {
    try {
        const value = await User.validateAsync(req.body);
        // console.log(value);
        next();
    } catch (error) {
        res.send(error);
}
}

exports.isAuth = async (req, res, next) => {
    
    const token = req.headers.authorization.split(" ")[1];
    // console.log(req.headers.authorization);
    jwt.verify(token, process.env.SECRET_KEY, (err, docs) => {
        if(err) {
            console.log('USER NOT AUTHORIZED!');
            res.send('USER NOT AUTHORIZED!')
        }else{
            next();
        }
    })

}
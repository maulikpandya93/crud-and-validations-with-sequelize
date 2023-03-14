require('dotenv').config();
const userModel = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
    const {email, password} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)

    const data = await userModel.create( {
        email : email,
        password : hashedPassword
    })

    try {
        if(data) {
            console.log(data);
            res.status(200).json(data);
        }
    } catch (error) {
        console.log('NOT CREATED!');
    }
}

exports.login = async (req, res) => {
    const {email, password} = req.body;
    // const hashedPassword = await bcrypt.hash(password, 10)
    const findData = await userModel.findOne({
        where : {
            email : email
        }
    })

   if(findData){
    const match = await bcrypt.compare(password, findData.password);
    if(match){
        const key = process.env.SECRET_KEY;
        const params = {
            email : findData.email, password : findData.password
        }
        const token = jwt.sign(params, key)
        res.status(200).json({message : 'generated', token : token});
    }else{
        res.status(404).send('INVALID CREDENTIALS!')
    }
   }else{
    res.status(400).send('NO DATA FOUND!')
   }
}
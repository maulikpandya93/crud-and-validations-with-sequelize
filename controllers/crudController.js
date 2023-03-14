const userModel = require("../models/userModel");

exports.insert = async (req, res) => {
    const {email, password} = req.body;

    const data = await userModel.create({
        email : email,
        password : password
    })

    try {
        if(data){
            console.log('CREATED!');
            res.status(200).json(data);
        }
    } catch (error) {
        console.log('NOT CREATED!');
    }
}

exports.update = async (req, res) => {
    const {id, email, password} = req.body;

    const updatedData = await userModel.update({email: email, password: password},{
        where : {
            id : id
        }
    });

    try {
        if(updatedData) {
            console.log('UPDATED SUCCESSFULLY!');
            const show = await userModel.findOne({where : {id : id}});
            if(show){
                res.status(200).json(show);
            }else{
                res.status(404).send('NO USER WITH GIVEN ID!')
            }
        }
    } catch (error) {
        console.log('NOT UPDATED!');
    }
}


exports.remove = async (req, res) => {
    const {id} = req.body;

    const deletedData = await userModel.destroy({where:{id:id}});

    try {
        console.log('DELETED!');
        if(deletedData){
            res.status(200).send('DELETED SUCCESSFULLY!')
        }else{
            res.send('DELETED ALREADY OR NO ID PRESENT')
        } 
    } catch (error) {
        console.log(error);
    }
}

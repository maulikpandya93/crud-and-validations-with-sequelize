const userModel = require('../models/userModel');
exports.byId = async (req, res) => {
    const id = req.params.id;

    const found = await userModel.findOne({where:{id:id}});

    try {
        if(found){
            console.log('FOUND!');
            res.status(200).json(found);
        }else{
            res.status(404).send(`NO DATA WITH ID ${id}`)
        }
    } catch (error) {
        console.log('NOT FOUND!');
    }
}

exports.all = async (req, res) => {
    const found = await userModel.findAll({});

    try {
        if(found){
            console.log('FOUND!');
            res.status(200).json(found);
        }else{
            res.status(404).send('NO DATA AVAILABLE AT THE MOMENT!');
        }
    } catch (error) {
        console.log('NOT FOUND!');
    }
}
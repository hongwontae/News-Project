const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const AdminModel = require('../model/AdminModel');

exports.createAdminUser = async (req, res, next)=>{
    
    const expressValidatorResult =  validationResult(req);

    if(!expressValidatorResult.isEmpty()){
        const errorData = new Error('Admin Validator에 통과하지 못했습니다.');
        errorData.reason = expressValidatorResult.array()
        console.log(errorData.reason)
        throw errorData;
    }

    const email = req.body.email;
    const password = req.body.password;

    try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await AdminModel.create({
            email,
            password : hashedPassword
        });

        return res.json({message : 'Success Create User', data : user})

    } catch (error) {
        console.log(error);
        return next(err)
    }

}
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const Registeruser=require('../models/user');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
app.use(cookieParser())
// require('dotenv').config();
const signup=async(req,res)=>{
    console.log(req.body);
    const checkemail=req.body.email
    var result={
        Name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }
    
    const emailExists = await Registeruser.findOne({ email:checkemail }).lean();
    
    if(req.body.formType=='signup'){
        if(emailExists){
            return res.status(400).json({ error: 'Email is already registered' });
        }else{
            await Registeruser.insertMany([result]);
            res.send(true);
        }
       
    }else{
        if(emailExists){
            const hash=await bcrypt.hash(emailExists.password,13);
            const isMatch = await bcrypt.compare(req.body.password,hash);
            // console.log(req.body.password);
            // console.log(emailExists.password);
            if(isMatch){
                const payload = {
                    TokenContent: {
                        isAuth: true,
                        name:req.body.name,
                        email: req.body.email
                        
                    }
                };
                const token = jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '7 days' }
                );
                console.log(token);
                res.cookie('authToken',token,{
                    httpOnly: true,
                    secure: true, // Set to true if using HTTPS
                    sameSite: 'strict', // Or 'lax' depending on your requirement
                });
                return res.status(200).json({email:req.body.email,id:emailExists._id, isAuth: true, token: token });
                // return res.status(200).send({msg:"Login Successful",username:emailExists.Name,token});
            }else{
                return res.status(400).json({ error: 'Password Mismatch' });
            }
            res.send(true);
        }else{
            return res.status(400).json({ error: 'Email is invalid' });
            
        }
    }
    
}

module.exports={signup};
const express = require('express');
const { db } = require('../models/signupModel');
const router = express.Router();
const signUpCopy = require('../models/signupModel')


router.post('/signup', (req, res) =>{
    //create new schema when user click on (send) button
    const signUpUser = new signUpCopy({
        fullName:req.body.fullName,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    signUpUser.save()
    .then(data => {
        res.json({
            message:'User added successfully!' , data
        })
    })
    .catch(error =>{
        res.json({
            message:'An error occured!'
        })
    })
})

router.get('/search/:username', (req,res)=>{
    signUpCopy.find({username: req.params.username}, (error, data)=>{
        if(error){
            res.json(error)
        }else{
            res.json(data)
            console.log(data)
        }
    })
  
    //console.log(user)
})



module.exports= router
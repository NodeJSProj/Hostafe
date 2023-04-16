const User=require('../models/User')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')


async function createToken(id){
    const token=await jwt.sign({id},process.env.SECRET_KEY,{
        expiresIn:'2d'
    })
    return token;
}

const controller={
    async login(req,res,next){
        try{
            const user=await User.login(req.body.email,req.body.password,res);
            try{
                const token=await createToken(user._id);
                res.cookie("jwt",token,{
                    maxAge:1000*60*60*24*2
                })
                res.send(token);
            }catch{
                res.status(404).json({message:'Problem to create tokens'});
                return;
            }
        }catch(error){
            res.status(404).json({message:"problem to get user details"});
            return;
        }

    },
    async signup(req,res,next){
        const {firstname,lastname,email,password}=req.body;
        const existingUser=await User.findOne({email:email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }
        const salt=await bcrypt.genSalt();
        const hashPass=await bcrypt.hash(password,salt);

        const user=await User.create({firstname,lastname,email,password:hashPass});

        const token=await createToken(user._id)
        res.cookie('jwt',token,{
            maxAge:1000*60*60*24*2
        })
        res.send(user);
    },
    async logout(req,res,next){
        try{
            res.clearCookie('jwt');
            res.send('Cookie Deleted');
        }catch(err){
            res.status(500).send(err);
        }
    }
}

module.exports=controller;
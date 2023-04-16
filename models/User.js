const mongoose=require('mongoose');
const bcrypt=require('bcrypt')

const UserSchema=new mongoose.Schema({
    firstname:{
        type:String,
        trim:true,
        required:[true,'firstname is required field']
    },
    lastname:{
        type:String,
        trim:true,
        required:[true,'lastname is required field']
    },
    email:{
        type:String,
        required:[true,'email is required field'],
        unique:true,
        match: /^\S+@\S+\.\S+$/,
    },
    password:{
        type:String,
        trim:true,
        required:[true,'Password is required field']
    }
})


UserSchema.statics.login=async function(email,password,res){
    const user=await this.findOne({email});
    if(user){
        const isCompare=await bcrypt.compare(password,user.password);
        if(isCompare){
            return user;
        }else{
            res.status(400).send("Invalid user")
        }
    }
}


module.exports=mongoose.model('user',UserSchema);
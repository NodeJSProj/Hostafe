const mongoose=require('mongoose');


const HostelSchema=new mongoose.Schema({
    collegeName:{
        type:String,
        required:true
    },
    hostelname:{
        type:Array,
        required:true
    }
    // address:{
    //     type:String,
    //     required:true
    // },
    // contactNo:{
    //     type:String,
    //     required:true,
    //     unique:true
    // },
    // price:{
    //     type:Number,
    //     required:true
    // },
    // distance:{
    //     type:Number,
    //     required:true
    // },
    // mess:{
    //     type:Boolean,   //yes,no
    //     required:true
    // },
    // gender:{
    //     type:String,
    //     required:true
    // },
    // mapLink:{
    //     type:String,
    //     required:true
    // }
})

module.exports=mongoose.model('hostel',HostelSchema);
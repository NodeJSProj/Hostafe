const Hostel=require('../models/Hostel')


const controller={
    async posthostelinfo(req,res,next){
        const {collegeName,hostelname}=req.body;
        const hostel=await Hostel.create({collegeName,hostelname});
        res.send(hostel);
    },
    async gethostel(req,res,next){
        const hostel=await Hostel.find({collegeName:req.body.collegeName},{"hostelname.name":1});
        res.send(hostel);
    },
    async gethosteldetails(req,res,next){
        const hosteldetails=await Hostel.find({hostelname:req.body.hostelname.name},{"hostelname.$":1});
        res.send(hosteldetails);
    }
}

module.exports=controller;
const express=require('express');
const router=express.Router();
const controller=require('../controllers/Hostelsearch')

//Routes added
router.get('/gethostel',controller.gethostel);
router.get('/hosteldetails',controller.gethosteldetails);
router.post('/hostelinfo',controller.posthostelinfo);


module.exports=router;
const express=require('express');
const router=express.Router();
const controller=require('../controllers/Hostelsearch')


router.get('/gethostel',controller.gethostel);
router.post('/hostelinfo',controller.posthostelinfo);


module.exports=router;
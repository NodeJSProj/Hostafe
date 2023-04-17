const express=require('express');
const router=express.Router()
const controller=require('../controllers/authentication');
const { model } = require('mongoose');

router.get('/logout',controller.logout);

router.post('/login',controller.login);
router.post('/signup',controller.signup);



module.exports=router;
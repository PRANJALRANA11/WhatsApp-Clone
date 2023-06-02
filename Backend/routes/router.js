const express=require("express");
const router=express.Router();
const get=require("../controller/controller.js");
const post=require("../controller/controller.js");
router.get('/users',get.getuser)
router.post('/signup',post.adduser)
router.post('/add',post.addconversation)
router.post('/get',post.getconversation)
router.post('/msg',post.newmessage)
router.get('/msg:id',get.getmessage)
module.exports=router;
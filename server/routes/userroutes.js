const {usersignup, userlogin, deleteuser} =require("../controllers/usercontroller")


const router=require("express").Router()

router.post("/signup",usersignup)
router.post("/login",userlogin)
router.delete('/:username', deleteuser)
module.exports=router
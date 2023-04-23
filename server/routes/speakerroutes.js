const {speakersignup, speakerlogin, getallspeakers} =require("../controllers/speakercontroller")



const router=require("express").Router()

router.post("/speakersignup",speakersignup)
router.post("/speakerlogin",speakerlogin)
router.get('/allspeakers/:id',getallspeakers)
module.exports=router
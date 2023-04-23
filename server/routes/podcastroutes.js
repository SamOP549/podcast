const {createpodcast,getallpodcasts} =require("../controllers/podcastcontroller")


const router=require("express").Router()

router.post("/createpodcast",createpodcast);
/*router.get('/getallpodcasts/:id',getallpodcasts)*/
module.exports=router
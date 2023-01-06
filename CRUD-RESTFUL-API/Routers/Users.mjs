import express from "express"

const router=express.Router();

router.get('/',(req,res)=>{
    res.send('There is no God but Allah,And , Muhammd(S.A.A.W) is the last messenger of Allah Almighty');
})

export default router;
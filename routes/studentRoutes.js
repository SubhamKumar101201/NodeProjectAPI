const express=require ("express");
const { allDetails,signup } = require("../controller/studentControle");
const router=express.Router();

router.get("/showdb",allDetails);
router.post("/signup",signup)
module.exports=router;
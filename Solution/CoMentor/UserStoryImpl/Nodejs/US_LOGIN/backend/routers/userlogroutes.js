const express=require("express");
const UserLogRoutes=(controller)=>{
    const router=express.Router();

    router.post("/login/:userid", controller.logUserLogin);
    router.post("/logout/:userid", controller.logUserLogout);
    return router;
}

module.exports=UserLogRoutes;   
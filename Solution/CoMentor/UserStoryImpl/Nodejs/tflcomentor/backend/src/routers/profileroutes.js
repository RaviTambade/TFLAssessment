const express=require("express");
const ProfileRoutes=(controller)=>{
     const router=express.Router();

     router.get(
       "/username/:userid",
       controller.getProfileName.bind(controller),
     );
     return router;
}

module.exports = ProfileRoutes;
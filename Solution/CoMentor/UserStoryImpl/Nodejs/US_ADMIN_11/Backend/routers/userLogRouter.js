const express=require("express");

module.exports=(controller)=>{
const router = express.Router();
    router.get('/getUserlogById/:id',controller.GetUserLogById.bind(controller));
    return router;
}
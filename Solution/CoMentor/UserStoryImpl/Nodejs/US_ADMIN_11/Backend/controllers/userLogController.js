class UserLogController
{
    constructor(service)
    {
        this.service=service;
    }

    GetUserLogById=(req,res)=>{
        const id=req.params.id;
        this.service.GetUserLogById(id,(err,result)=>{
            if(err)
            {
                console.error("Error fetching users:",err);
                return res.status(500).json({error:"Internal Server Error"});
            }
            res.json(result);
        });
    }
}

module.exports=UserLogController;
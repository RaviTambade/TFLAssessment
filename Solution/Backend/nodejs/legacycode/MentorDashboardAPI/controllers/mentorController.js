module.exports=function mentorController(mentorService){
    return{
       
    publishAssessmentController(req, res){
    mentorService.readPublishAssessment((err,newData) => {
         if (err) return res.status(500).json(err);
        res.send(newData)
    })
    },

    learnerSkillController(req,res){
    mentorService.readLearnerSkill((err,newData) => {
        if(err) return res.status(500).json(err)
        res.send(newData)
    });
},
mentorDataController(req,res){
    mentorService.readMentorData((err,newData) => {
        if(err) return res.status(500).json(err)
        res.send(newData)
    });
},
mentorRecommendationController(req,res){
    mentorService.readMentorRecommendation((err,newData) => {
        if(err) return res.status(500).json(err)
        res.send(newData)
    });
},
skillHealthController(req,res){
    mentorService.readSkillHealth((err,newData) => {
        if(err) return res.status(500).json(err)
        res.send(newData)
    });
},
testDataController(req,res){
    mentorService.readTestData((err,newData) => {
        if(err) return res.status(500).json(err)
        res.send(newData)
    });
}

}

}


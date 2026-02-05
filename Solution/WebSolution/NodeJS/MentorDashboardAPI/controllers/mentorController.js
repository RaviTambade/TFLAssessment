module.exports=function mentorController(mentorService){
    return{
       
 publishAssessmentController(req, res){
    readPublishAssessment((newData) => {
        res.send(newData)
    })
    },
    readLearnerSkillController(req,res){
    readLearnerSkill = ((newData) => {
        res.send(newData)
    });
}

}

    }


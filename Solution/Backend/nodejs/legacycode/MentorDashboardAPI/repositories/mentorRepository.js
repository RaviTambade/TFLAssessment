var fs = require('fs');
var path = require('path');

module.exports = function mentorRepository() {
    return {

        readPublishAssessment(callback) {
            var fileName = path.join(__dirname, "../data/publishAssessment.json");
            fs.readFile(fileName, (err, data) => {
                if (err) {
                    callback(err,null);
                } else {
                    var newData = JSON.parse(data.toString());
                    callback(null,newData);
                }
            });
        },

        readLearnerSkill(callback) {
            var fileName = path.join(__dirname, "../data/learnerSkill.json");
            fs.readFile(fileName, (err, data) => {
                if (err) {
                    callback(err,null);
                } else {
                    var newData = JSON.parse(data.toString());
                    callback(null,newData);
                }
            });
        },

        readMentorData(callback){
            var fileName=path.join(__dirname, "../data/mentordata.json");
            fs.readFile(fileName,(err,data)=>{
                if(err){
                    callback(err,null);
                }else{
                    callback(null,data);
                }
            });
        },
        readMentorRecommendation(callback){
            var fileName=path.join(__dirname, "../data/mentorrecommendation.json");
            fs.readFile(fileName,(err,data)=>{
                if(err){
                    callback(err,null);
                }
                else{
                    callback(null,data);
                }
            })
        }
        ,
        readSkillHealth(callback){
            var fileName=path.join(__dirname, "../data/skillhealth.json");
            fs.readFile(fileName,(err,data)=>{
                if(err){
                    callback(err,null);
                }
                else{
                    callback(null,data);
                }
            })
        },
        readTestData(callback){
            var fileName=path.join(__dirname, "../data/testdata.json");
            fs.readFile(fileName,(err,data)=>{
                if(err){
                    callback(err,null);
                }
                else{
                    callback(null,data);
                }
            })
        }
    };
};

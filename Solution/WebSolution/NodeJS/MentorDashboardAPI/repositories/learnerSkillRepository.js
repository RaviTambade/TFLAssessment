var fs=require('fs')
var learnerskillRepository=(callback)=>{
    var fileName="../data/learnerSkill.json";

    var readLearnerSkill=(err,data)=>{
        if(err){
            throw err;
        }
        else{
            var newData=JSON.parse(data.toString());
            (callback)=newData;
        }
    }
    fs.readFile(fileName,readLearnerSkill);
}


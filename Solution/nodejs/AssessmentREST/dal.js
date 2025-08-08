//mysql database CRUD operations functionality
//insert, update, delete, etc  


'user strict';
var sql = require('./mysqlconnect');

//define model
var QuestionBank = function(question) {
    this.subjectid = question.subjectid;
    this.title = question.title;
    this.a = question.a;
    this.b = question.b;
    this.c = question.c; 
    this.d = question.d;
    this.answerKey = question.answerKey;
    this.evaluationCriteriasid = question.evaluationCriteriasid;
};



//get all questions
QuestionBank.getAllQuestions = function (result){
    sql.query("SELECT * FROM questionbank", function (err, res) {
        if(err){
            console.log ("error: ", err);
            result(err, null);
        
        }
    
        else{
           result(null,res);
        };
    });      
};



 QuestionBank.createQuestion= function(newQuestion,result) {
    sql.query("INSERT INTO questionbank SET ?",newQuestion, function(err, res) {
        if (err) {
            console.log("error:",err);
            result(err, null);
        }else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

QuestionBank.getById = function(questionId,result) {
    sql.query("select * from questionbank where id = ?",questionId, function(err, res) {
        if (err) {
            console.log("error:",err);
            result(err, null);
        }else {
            result(null, res);
        }
    });
};

QuestionBank.updateById= function(id,question,result) {
    sql.query("UPDATE questionbank SET ? WHERE id = ?", [question,id],function(err,res) {
        if (err) {
            console.log("Update error:",err);
            result(err,null);
        }
        else {
            result(null, res);
        
        }
    });
};

QuestionBank.remove = function(id,result) {
    sql.query("DELETE FROM questionbank WHERE id = ?",[id],function(err,res) {
        if (err) {
            console.log("error:",err);
            result(null, err);
        }else {
            result(null, res);
        }
    });
};

module.exports = QuestionBank;

//logic for handling HTTP request types///GET, POST, PUT, DELETE ETC

'use strict';
var QuestionBank = require('./dal');

exports.getAll= function(req, res) {
    
    QuestionBank.getAllQuestions(function(err,questions){
        if(err)
            res.send(err);
        res.send(questions);
    });
};

exports.insert = function(req, res) {
     var question= (req.body);

     //handles null error
     if ( !question.subjectid || !question.title || !question.a || !question.b || !question.c || !question.d || !question.answerkey || !question.evaluationcriteriasid){
        res.status(400).send({error: true, message:'Please provide all required fields (title, subjectId, options, answerKey)' });
     }else {
        QuestionBank.createQuestion(question,function(err,insertId){
            if(err)
                res.send(err);
            else
            res.json({ id: insertId, message: 'Question inserted successfully'});
        });
     }
};

exports.getById = function(req, res) {
    QuestionBank.getById(req.params.id,function(err,question) {
        if(err)
            res.send(err);
        res.json(question);
    });
};

exports.update = function(req, res) {
    QuestionBank.updateById(req.params.id,new QuestionBank(req.body),function(err,question) {
        if(err)
            res.send(err);
      res.json({message:'Question updated successfully'});
    });
};

exports.remove = function(req, res) {
    QuestionBank.remove(req.params.id,function(err,result) {
        if(err)
            res.send(err);
        res.json({message:' deleted successfully '});
    });
}

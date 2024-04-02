<<<<<<< HEAD
﻿
using QuestionBankEntity;

namespace QuestionBankInterfaces;

 public interface IQuestionBankService{
    public List<QuestionTitle> GetAllQuestions();
    public List<SubjectQuestion> GetQuestionsBySubject(int id);
    public List<QuestionDetails> GetQuestionsBySubjectAndCriteria(int subjectId,int criteriaId);
    public bool UpdateAnswer(Question answer,int id);
    public Question GetQuestion(int questionId);
    public bool UpdateQuestionOptions(int id,Question options);
    public bool UpdateSubjectCriteria(int questionId,Question question);
=======
﻿using QuestionBankEntity;
namespace QuestionBankInterfaces;

 public interface IQuestionBankService{
//     public List<QuestionTitle> GetAllQuestions();
//     public List<SubjectQuestion> GetQuestionsBySubject(int id);
//     public List<QuestionDetails> GetQuestionsBySubjectAndCriteria(int subjectId,int criteriaId);
//     public bool UpdateAnswer(Question answer,int id);
     public Question GetQuestion(int questionId);
//     public bool UpdateQuestionOptions(int id,Question options);
//     public bool UpdateSubjectCriteria(int questionId,Question question);
>>>>>>> fbcef57c99024e81eb481cf2f7332d67f984628e
}
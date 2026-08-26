package com.transflower.tflcomentor.ecm.service.impl;

import java.time.LocalDate;
import java.util.List;
import java.util.concurrent.CompletableFuture;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.transflower.tflcomentor.ecm.dto.request.QuestionOptionsRequest;
import com.transflower.tflcomentor.ecm.dto.response.QuestionDisplay;
import com.transflower.tflcomentor.ecm.entity.CompleteQuestion;
import com.transflower.tflcomentor.ecm.entity.Question;
import com.transflower.tflcomentor.ecm.repository.QuestionRepository;
import com.transflower.tflcomentor.ecm.service.QuestionService;

@Service
public class QuestionsServiceImpl implements QuestionService {

    @Autowired
    private QuestionRepository repository;


    // @Override
    // public Long createQuestionWithOptions(QuestionOptionsRequest dto) {

    //     Question question = new Question();
    //     question.setDescription(dto.getDescription());
    //     question.setQuestionType(dto.getQuestionType());
    //     question.setDifficultyLevel(dto.getDifficultyLevel());
    //     question.setQuestionStatus(dto.getStatus());
    //     question.setLanguage(dto.getLanguage());
    //     question.setLayer(dto.getLayer());
    //     question.setFramework(dto.getFramework());
    //     question.setConcept(dto.getConcept());
    //     Long questionId = repository.insert(question);
    //     if (dto.getQuestionType() == QuestionType.MCQ) {

    //         repository.insertMcqOptions(
    //                 questionId,
    //                 dto.getOptionA(),
    //                 dto.getOptionB(),
    //                 dto.getOptionC(),
    //                 dto.getOptionD(),
    //                 dto.getCorrectAnswer()
    //         );
    //     }
    //     return questionId;
    // }

    @Override
    public CompletableFuture<QuestionDisplay> getQuestionById(long question_id) {
        return repository.getQuestionById(question_id);
    }

    @Override
    public CompletableFuture<Integer> getQuestionCount(){
        return repository.getQuestionCount();
    }

    // @Override
    // public List<QuestionDisplay> getAllQuestions(Long user_role_Id) {
    //     return repository.getAllQuestions(user_role_Id);
    // }

    // @Override
    // public List<Question> getQuestionsByDifficulty(DifficultyLevel difficulty) {
    //     return repository.getQuestionsByDifficulty(difficulty);
    // }

    @Override
    public CompletableFuture<Void> updateQuestionDetailsById(Long questionId, QuestionOptionsRequest dto) {
        return CompletableFuture.runAsync(() -> {
            repository.updateQuestionDetailsById(questionId, dto);
        });
    }

    @Override
    public CompletableFuture<List<Question>> getQuestions(LocalDate fromDate, LocalDate toDate) {
        return repository.getQuestions(fromDate, toDate);
    }

    @Override
    public CompletableFuture<QuestionOptionsRequest> getQuestionDetails(Long questionId) {
        return repository.getQuestionDetails(questionId);
    }

    // @Override
    // public List<DescriptiveQuestion> getDescriptiveQuestion(QuestionType questionType) {
    //     return repository.getDescriptiveQuestion(questionType);
    // }

    // @Override
    // public List<QuestionWithStatus> getQuestions(QuestionStatus status) {
    //     return repository.getQuestions(status);
    // }

    // @Override
    // public void updateQuestionStatus(List<Long> questionIds, QuestionStatus status) {
    //     repository.updateQuestionStatus(questionIds, status);
    // }

    // @Override
    // public void updateQuestionStatus(long questionId, QuestionStatus status) {
    //     repository.updateQuestionStatus(questionId, status);
    // }

    @Override
    public CompletableFuture<List<Question>> getQuestionsByConcept(String concept,Long userId, Long roleId) {
        return repository.getQuestionsByConcept(concept, userId, roleId);
    }

    // @Override
    // public int getQuestionCountByConcept(String concept) {
    //     return repository.getQuestionCountByConcept(concept);
    // }
    @Override
    public CompletableFuture<Void> insertCompleteQuestion(CompleteQuestion q) {
        return CompletableFuture.runAsync(() -> {
            repository.insertCompleteQuestion(q);
        });
    }

    @Override
    public CompletableFuture<List<String>> getConcepts(Long userId, Long roleId) {
        return repository.getConcepts( userId, roleId);
    }

    // @Override
    // public List<QuestionDisplayToMentor> getAllQuestions(Long userId,Long roleId) {
    //     return repository.getAllQuestions(userId,roleId);
    // }
}
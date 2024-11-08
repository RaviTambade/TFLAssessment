
import { createAsyncThunk } from '@reduxjs/toolkit';
//import QuestionService from '../services/questionbankservice';
import QuestionBankService from '../services/questionbankservice';

// Thunks for asynchronous API calls
export const fetchQuestionById = createAsyncThunk(
  'questions/fetchById',
  async (questionId) => {
    const response = await QuestionBankService.getQuestionById(questionId);
    return response;
  }
);

export const fetchQuestionsByTestId = createAsyncThunk(
  'questions/fetchByTestId',
  async (testId) => {
    const response = await QuestionBankService.getQuestionsByTestId(testId);
    return response;
  }
);

export const fetchAllQuestions = createAsyncThunk(
  'questions/fetchAll',
  async () => {
    const response = await QuestionBankService.getAllQuestions();
    return response;
  }
);

export const fetchAllQuestionsWithSubjectAndCriteria = createAsyncThunk(
  'questions/fetchQuestionsWithSubjectAndCriteria',
  async () => {
    const response = await QuestionBankService.getQuestionsWithSubjectAndCriteria();
    return response;
  }
);


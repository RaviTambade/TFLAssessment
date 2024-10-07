
import { createAsyncThunk } from '@reduxjs/toolkit';
import QuestionService from '../services/questionbankservice';

// Thunks for asynchronous API calls
export const fetchQuestionById = createAsyncThunk(
  'questions/fetchById',
  async (questionId) => {
    const response = await QuestionService.getQuestionById(questionId);
    return response;
  }
);

export const fetchQuestionsByTestId = createAsyncThunk(
  'questions/fetchByTestId',
  async (testId) => {
    const response = await QuestionService.getQuestionsByTestId(testId);
    return response;
  }
);

export const fetchAllQuestions = createAsyncThunk(
  'questions/fetchAll',
  async () => {
    const response = await QuestionService.getAllQuestions();
    return response;
  }
);




import { createReducer } from '@reduxjs/toolkit';
import {
  fetchQuestionById,
  fetchQuestionsByTestId,
  fetchAllQuestions,
} from './questionActions';

// Initial state
const initialState = {
  questionList: [],
  questionDetails: {},
  loading: false,
  error: null,
};

// Reducer
const questionReducer = createReducer(initialState, (builder) => {
  builder
    // For fetching question by ID
    .addCase(fetchQuestionById.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchQuestionById.fulfilled, (state, action) => {
      state.loading = false;
      state.questionDetails = action.payload;
    })
    .addCase(fetchQuestionById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.questionDetails = {};
    })

    // For fetching questions by test ID
    .addCase(fetchQuestionsByTestId.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchQuestionsByTestId.fulfilled, (state, action) => {
      state.loading = false;
      state.questionList = action.payload;
    })
    .addCase(fetchQuestionsByTestId.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.questionList = []; 
    })

    // For fetching all questions
    .addCase(fetchAllQuestions.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchAllQuestions.fulfilled, (state, action) => {
      state.loading = false;
      state.questionList = action.payload;
    })
    .addCase(fetchAllQuestions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.questionList = []; 
    })

     // For fetching all questions with subject and criteria
     .addCase(fetchAllQuestionsWithSubjectAndCriteria.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchAllQuestionsWithSubjectAndCriteria.fulfilled, (state, action) => {
      state.loading = false;
      state.questionList = action.payload;
    })
    .addCase(fetchAllQuestionsWithSubjectAndCriteria.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })


});

export default questionReducer;

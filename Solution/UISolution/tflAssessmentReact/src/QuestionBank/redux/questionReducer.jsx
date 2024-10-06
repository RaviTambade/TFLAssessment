import { createReducer } from '@reduxjs/toolkit';
import {
  fetchQuestionById,
  fetchQuestionsByTestId,
  fetchAllQuestions,
  fetchCriteria
} from './questionActions';

const initialState = {
  questionList: [],
  questionDetails: {},
  criteriaList: [],  
  loading: false,
  error: null,
};

const questionReducer = createReducer(initialState, (builder) => {
  builder
    // For fetching questions by ID
    .addCase(fetchQuestionById.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchQuestionById.fulfilled, (state, action) => {
      state.loading = false;
      state.questionDetails = action.payload;
    })
    .addCase(fetchQuestionById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })

    // For fetching questions by test ID
    .addCase(fetchQuestionsByTestId.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchQuestionsByTestId.fulfilled, (state, action) => {
      state.loading = false;
      state.questionList = action.payload;
    })
    .addCase(fetchQuestionsByTestId.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })

    // For fetching all questions
    .addCase(fetchAllQuestions.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchAllQuestions.fulfilled, (state, action) => {
      state.loading = false;
      state.questionList = action.payload;
    })
    .addCase(fetchAllQuestions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })

    // For fetching criteria
    .addCase(fetchCriteria.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchCriteria.fulfilled, (state, action) => {
      //console.log('Criteria List:', action.payload);
      state.loading = false;
      state.criteriaList = action.payload; 
    })
    .addCase(fetchCriteria.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Something went wrong';
    });
});

export default questionReducer;

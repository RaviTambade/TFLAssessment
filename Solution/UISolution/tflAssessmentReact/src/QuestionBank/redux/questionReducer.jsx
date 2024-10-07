import { createReducer } from '@reduxjs/toolkit';
import {
  fetchQuestionById,
  fetchQuestionsByTestId,
  fetchAllQuestions,
} from './questionActions';

const initialState = {
  questionList: [],
  questionDetails: {},
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

  
});

export default questionReducer;

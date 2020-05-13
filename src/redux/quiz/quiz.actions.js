import QuizTypes from "./quiz.types";

export const setCheckbox = (checked, quizIdx, optionIdx) => ({
  type: QuizTypes.SET_CHECKBOX,
  payload: {
    checked,
    quizIdx,
    optionIdx
  }
});

export const setSubmitted = (submitted) => ({
  type: QuizTypes.SET_SUBMITTED,
  payload: {
    submitted
  }
});
import { _saveQuestion, _saveQuestionAnswer } from "../_DATA"

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function handleAddQuestion(question) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    // TODO dispatch(showLoading())

    return _saveQuestion(
      question
    )
      .then((question) => dispatch(addQuestion(question)))
    // .then(() => dispatch(hideLoading()))
  }
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    qid,
    authedUser,
    answer
  }
}

export function handleAnswerQuestion(info) {
  return (dispatch) => {

    return _saveQuestionAnswer(info).then(() =>
      dispatch(answerQuestion(info))
    )
  }
}
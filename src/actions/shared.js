import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { _getQuestions, _getUsers } from '../_DATA'


export function handleInitialData () {
  return (dispatch) => {
    // TODO dispatch(showLoading())
    return Promise.all([_getQuestions(), _getUsers()])
      .then(([questions, users]) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        // dispatch(setAuthedUser(AUTHED_ID))
        // dispatch(hideLoading())
      })
  }
}
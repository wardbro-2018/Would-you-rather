import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { handleAnswerQuestion } from "../actions/questions";

function Question() {

    const { question_id } = useParams()
    const question = useSelector(state => state.questions[question_id])

    const authedUser = useSelector(state => state.authedUser)
    const dispatch = useDispatch();
    const user = useSelector(state => state.users[question.author])

    const authedUserProfile = useSelector(state => state.users[authedUser])
    const { isAnswered, optionOnePercentage, optionOneVotes, totalVotes, optionTwoPercentage, optionTwoVotes } = calculateUserStats(authedUserProfile, question);

    return (
        <div className="container d-grid align-items-center justify-content-center" >

            <div className="card m-2" style={{ width: "25rem"}} >
                <div className="card-footer">{user.name} asks:</div>
                <div className="row p-4">
                    <img className="img-fluid col-md-4" src={user.avatarURL} style={{objectFit: "contain"}}/>
                    <div className="col-md-8 d-flex flex-column align-content-center">
                        <div className="m-2" >Would you Rather?</div>
                        {isAnswered
                            ?
                            <>
                                <div className="card">
                                    <p>{question.optionOne.text}</p>
                                    {question.optionOne.votes.includes(authedUser) && <p>you voted for this!</p>}
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: `${optionOnePercentage}%` }} aria-valuemin="0" aria-valuemax="100">{optionOnePercentage} %</div>
                                    </div>
                                    <p>{optionOneVotes}/{totalVotes} votes</p>
                                </div>
                                <br />
                                <div className="card">
                                    <p>{question.optionTwo.text}</p>
                                    {question.optionTwo.votes.includes(authedUser) && <p>you voted for this</p>}
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: `${optionTwoPercentage}%` }} aria-valuemin="0" aria-valuemax="100">{optionTwoPercentage} %</div>
                                    </div>
                                    <p>{optionTwoVotes}/{totalVotes} votes</p>
                                </div>

                            </>
                            :
                            <>
                                <button type="button" onClick={() => dispatch(handleAnswerQuestion({ authedUser, qid: question.id, answer: 'optionOne' }))} className="btn btn-light m-2">{question.optionOne.text}</button>
                                <button type="button" onClick={() => dispatch(handleAnswerQuestion({ authedUser, qid: question.id, answer: 'optionTwo' }))} className="btn btn-light m-2">{question.optionTwo.text}</button>
                            </>
                        }

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Question;

function calculateUserStats(authedUserProfile, question) {
    const answered = Object.keys(authedUserProfile.answers);
    const isAnswered = answered.includes(question.id);
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const optionOnePercentage = Math.round(optionOneVotes / totalVotes * 100);
    const optionTwoPercentage = Math.round(optionTwoVotes / totalVotes * 100);
    return { isAnswered, optionOnePercentage, optionOneVotes, totalVotes, optionTwoPercentage, optionTwoVotes };
}

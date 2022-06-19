import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function PreviewQuestion(props) {

    const user = useSelector(state => state.users[props.question.author]);
    const navigate = useNavigate();
    return (
        <div className="card m-2" style={{ width: "25rem"}} >
            <div className="card-footer">{user.name} asks:</div>
            <div className="row">
                <img className="img-fluid col-md-4" src={user.avatarURL} />
                <div className="col-md-8 d-flex flex-column align-content-center">
                    <div className="m-2" >Would you Rather?</div>
                    <div>{props.question.optionOne.text.substring(0,10)}...</div>
                    <button onClick={() => navigate(`/questions/${props.question.id}`)}>View Poll</button>
                </div>
            </div>

        </div>
    );
}

export default PreviewQuestion;
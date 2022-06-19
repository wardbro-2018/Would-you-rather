import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

function EnsureQuestion(props) {

    const { question_id } = useParams()
    const question = useSelector(state => state.questions[question_id])
    return (
        question ? props.children : <Navigate to="/404" />
    );
}

export default EnsureQuestion;
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

function NewQuestion() {

    const navigate = useNavigate();
    const [optionOneText, setOptionOneText] = useState("");
    const [optionTwoText, setOptionTwoText] = useState("");
    const author = useSelector(state => state.authedUser)
    const dispatch = useDispatch()
    const [errorMessage, setErrorMessage] = useState("")
    return (
        <div className="container d-grid align-items-center justify-content-center">

            <div className="card m-2" style={{ width: "25rem" }} >
                <div className="card-header">Create New Question</div>
                <div className="p-2">
                    <p>Complete the question</p>
                    <div><b>Would you rather...</b></div>
                    <input onChange={e => setOptionOneText(e.target.value)} className="form-control" type="text" placeholder="Default input" aria-label="default input example" />
                    <p>OR</p>
                    <input onChange={e => setOptionTwoText(e.target.value)} className="form-control" type="text" placeholder="Default input" aria-label="default input example" />
                    <br />
                    <button className="submit" onClick={() => {
                        if(optionOneText == "" || optionTwoText == ""){
                            setErrorMessage("options cannot be empty")
                        }
                        else if(optionOneText == optionTwoText){
                            setErrorMessage("options cannot be the same")
                        }
                        else{
                            dispatch(handleAddQuestion({ optionOneText, optionTwoText, author }));
                            navigate("/")
                        }
                    }}>Submit</button>
                    {errorMessage != "" && <p style={{color: "red"}}>{errorMessage}</p>}
                </div>

            </div>
        </div>
    );
    
}

export default NewQuestion;
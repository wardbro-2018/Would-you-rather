import { useState } from "react";
import { useSelector } from "react-redux";
import PreviewQuestion from "./PreviewQuestion";

function QuestionList() {

  const [showUnanswered, setshowUnanswered] = useState(true);
  const questions = useSelector(state => state.questions);
  const user = useSelector(state => state.users[state.authedUser]);
  const answered = Object.keys(user.answers);
  return (
    <div className="container d-flex align-items-center flex-column">
      <nav className="navbar navbar-expand-lg bg-light ">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav nav-tabs">
              <li className="nav-item">
                <button onClick={() => setshowUnanswered(true)} className={`nav-link ${showUnanswered && "active"}`}>Unanswered Questions</button>
              </li>
              <li className="nav-item">
                <button onClick={() => setshowUnanswered(false)} className={`nav-link ${!showUnanswered && "active"}`}>Answered Questions</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ul>
        {Object.values(questions).filter(x => showUnanswered ^ answered.includes(x.id)).sort((x, y) => y.timestamp - x.timestamp).map(x => <PreviewQuestion key={x.id} question={x} />)}
      </ul>
    </div>
  );
}

export default QuestionList;

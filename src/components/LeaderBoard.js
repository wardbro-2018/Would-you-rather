import { useSelector } from "react-redux";

function LeaderBoard() {

    const users = useSelector(state => state.users);

    return (
        <div className="container d-grid align-items-center justify-content-center">
            {Object.values(users)
            .sort((u1, u2) => ((Object.keys(u2.answers).length + u2.questions.length) - (Object.keys(u1.answers).length + u1.questions.length)))
            .map(
                user =>
                    <div key={user.id} className="card m-2" style={{ width: "25rem" }} >
                        <div className="card-footer">{user.name}</div>
                        <div className="row">
                            <img className="img-fluid col-md-4" src={user.avatarURL} />
                            <div className="col-md-8 d-flex flex-column align-content-center">
                                <div className="m-2" >Answered Questions : {Object.keys(user.answers).length} </div>
                                <div className="m-2" >Created Questions : {user.questions.length}</div>
                                <br/>
                                <div><b>Score: {Object.keys(user.answers).length + user.questions.length}</b></div>
                            </div>
                        </div>
                    </div>
            )}
        </div>
    );
}

export default LeaderBoard;
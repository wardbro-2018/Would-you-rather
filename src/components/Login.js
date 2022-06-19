import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

function Login() {

    const dispatch = useDispatch()
    const [user, setUser] = useState("");
    const users = useSelector(state => state.users)

    return (
        <div className="container d-grid align-items-center justify-content-center" style={{height: "100vh"}}>
            <div className="flex-column">
                <div className="card m-2" style={{ width: "25rem", height: "13rem" }}  >
                    <div className="card-title">Welcome to Would You Rather?</div>
                    <br/>
                    <select value={user} onChange={e => setUser(e.target.value)} className="form-select" aria-label="Default select example">
                        <option value="" disabled>Please sign in to continue...</option>
                        {Object.values(users).map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
                    </select>
                    <br/>
                    <button onClick={() => dispatch(setAuthedUser(user))} className="submit">Sign in</button>
                </div>
            </div>
        </div>
    );
}

export default Login;
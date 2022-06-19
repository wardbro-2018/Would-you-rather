import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

function NavBar() {

    const dispatch = useDispatch()
    const authedUser = useSelector(state => state.users[state.authedUser])
    return (
        <nav className="navbar navbar-expand-lg bg-light nav-tabs">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Would you Rather?</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/add">New Question</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/LeaderBoard">Leader Board</Link>
                        </li>
                        <li className="nav-item d-flex">
                            <p className="nav-link">Hello, {authedUser.name}</p>
                            <img className="rounded float-end" src={authedUser.avatarURL} style={{ width: "3rem", height: "3rem" }}/>
                        </li>
                        <li className="nav-item d-flex">
                            <a className="nav-link" href="#" onClick={() => dispatch(setAuthedUser(null))}>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
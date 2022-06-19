import { useSelector } from "react-redux";
import Login from "./Login";

function EnsureAuth(props) {

    const authedUser = useSelector(state => state.authedUser)

    return (
        authedUser ? props.children : <Login />
    );
}

export default EnsureAuth;
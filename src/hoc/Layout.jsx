import * as React from "react";
import NavBar from "../components/dashboard/common/NavBar";
import { withRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { STORAGE_KEYS } from "../utils/constants";


const Layout = props => {
    const doLogout = () => {
        localStorage.removeItem(STORAGE_KEYS.USER_NAME);
        localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN_KEY);
        props.history.push("/login")
    }

    const userName = localStorage.getItem(STORAGE_KEYS.USER_NAME);
    return (
        <>
            <ToastContainer autoClose={8000} />
            {props.location.pathname !== "/login" ? (
                <>
                    <NavBar
                        doLogout={() => doLogout()}
                        userName={userName}
                    />
                    <div id="wrapper">
                        <div id="page-content-wrapper">{props.children}</div>
                    </div>
                </>
            ) : (
                    props.children
                )}
        </>
    );
}

export default withRouter(Layout);
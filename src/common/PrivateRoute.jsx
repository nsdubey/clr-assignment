import * as React from "react";
import { Redirect, Route } from "react-router-dom";

import { isLoggedIn } from "../utils/storage";

export const PrivateRoute = (props) => {
    const { component, ...rest } = props;

    if (isLoggedIn()) {
        return <Route {...rest} component={component} />;
    }

    return <Redirect to={{ pathname: "/login" }} />;
};

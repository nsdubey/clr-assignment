import React from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from "../routes/routes";
import { PrivateRoute } from "../common/PrivateRoute";
import { NotFound } from "./NotFound";

export const RootNavigator = () => (
    <Switch>
        {routes.map((route) => {
            if (route.isPrivate) {
                return (
                    <PrivateRoute
                        key={route.path}
                        exact
                        path={route.path}
                        component={route.component}
                    />
                );
            }
            return <Route key={route.path} {...route} />;
        })}
        <NotFound />
    </Switch>
);
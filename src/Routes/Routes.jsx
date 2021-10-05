import React from 'react';
import { Switch, Route } from "react-router-dom";
import Commit from '../Pages/Commit';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/repositories/:owner/:repository/commit/:commitSHA">
                <Commit />
            </Route>
        </Switch>
    )
}

export default Routes;
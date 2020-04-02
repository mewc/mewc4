import React from 'react';
import Home from './view/containers/Home';
import PastProjects from './view/containers/PastProjects';
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

//https://reacttraining.com/react-router/web/example/custom-link
function Router() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/past-projects">
                        <PastProjects />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div >
    );
}


export default Router;

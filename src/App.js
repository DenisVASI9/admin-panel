import React from 'react';

import {createBrowserHistory} from "history";
import {Route, Router, Switch} from "react-router";

// Pages
import MainPage from "./pages/main";
// Pages

// Глобальные стили
import 'normalize.css';
import 'antd/dist/antd.css';
// Глобальные стили

const history = createBrowserHistory()

function App() {
    return <Router history={history}>
        <Switch>
            <Route path="/" component={MainPage}/>
        </Switch>
    </Router>
}

export default App;

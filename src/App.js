import React from 'react';
import {Route, Router, Switch} from "react-router";

// libs
import {Provider} from "react-redux";
import configureStore, {history} from './store'
// Libs

// Pages
import MainPage from "./pages/main";
import DemoPage from "./pages/demo";
// Pages

// Глобальные стили
import 'normalize.css';
import 'antd/dist/antd.css';
// Глобальные стили

const store = configureStore()

function App() {
    return <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact="/demo" component={DemoPage}/>
            </Switch>
        </Router>
    </Provider>
}

export default App;

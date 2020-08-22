import React from 'react';
import {Route, Switch} from "react-router";

// libs
import {Provider} from "react-redux";
import configureStore, {history} from './store'
import {ConnectedRouter} from 'connected-react-router'
// Libs

// Pages
import MainPage from "./pages/main";
import UsersPage from "./pages/users";
import DemoPage from "./pages/demo";
import Settings from "./pages/Admin/Settings/Settings";
// Pages

// Глобальные стили
import 'normalize.css';
import 'antd/dist/antd.css';

// Глобальные стили

const store = configureStore()

function App() {
    return <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/users" component={UsersPage}/>
                <Route exact path="/settings" component={Settings}/>
                <Route exact path="/demo" component={DemoPage}/>
            </Switch>
        </ConnectedRouter>
    </Provider>
}

export default App;

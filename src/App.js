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
import ModeratorsPage from "./pages/moderators";
import DemoPage from "./pages/demo";
import Settings from "./pages/Admin/Settings/Settings";
import CoursesPage from "./pages/Moderator/courses/Courses";
// Pages

// Глобальные стили
import 'normalize.css';
import 'antd/dist/antd.css';
import './fonts/zillaslab.css'

// Глобальные стили

const store = configureStore();

function App() {
    return <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/users/list" component={UsersPage}/>
                <Route exact path="/moderators/list" component={ModeratorsPage}/>
                <Route exact path="/settings" component={Settings}/>
                <Route exact path="/demo" component={DemoPage}/>
                <Route exact path="/courses" component={CoursesPage}/>
            </Switch>
        </ConnectedRouter>
    </Provider>
}

export default App;

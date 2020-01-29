import React from 'react';
import './App.css';
import {Route, Router, Switch} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import history from './utils/history'
import LoginContainer from "./components/Auth/LoginContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import NewsContainer from "./components/News/NewsContainer";
import Page404 from "./components/404/Page404";

function App() {
    return (
        <Router history={history}>
            <HeaderContainer/>
            <Switch>
                <Route path="/profile" component={ProfileContainer}/>
                <Route path="/login" component={LoginContainer}/>
                <Route path="/news" component={NewsContainer}/>
                <Route exact path="/" component={NewsContainer}/>
                <Route  path="*" component={Page404}/>
            </Switch>
        </Router>
    );
}

export default App;

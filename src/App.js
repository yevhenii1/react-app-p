import React from 'react';
import './App.css';
import {Route, Router} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import history from './utils/history'
import LoginContainer from "./components/Auth/LoginContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import NewsContainer from "./components/News/NewsContainer";

function App() {
    return (
        <Router history={history}>
            <HeaderContainer/>
            <Route path="/profile" component={ProfileContainer} />
            <Route path="/login" component={LoginContainer}/>
            <Route path="/news" component={NewsContainer}/>
        </Router>
    );
}

export default App;

import React from 'react'
import Nav from "../Nav/Nav";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <Nav />
            <div>
                {!!props.isAuth
                    ? <a href="#" onClick={props.handleSignOut}>Log out</a>
                    : <NavLink to="/login">Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header
import React from 'react'
import Nav from "../Nav/Nav";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <Nav isAuth={props.isAuth} />
            <div>
                {!!props.isAuth
                    ? <a href="#" className={s.navLink} onClick={props.handleSignOut}>Log out</a>
                    : <NavLink exact to="/login" className={s.navLink}  activeClassName={s.selected}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header
import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./Nav.module.css";

const Nav = (props) => {
    return (
        <>
            <NavLink  exact   to="/profile" className={!!props.isAuth ? s.navLink : s.disabled} activeClassName={s.selected}>Profile</NavLink>
            <NavLink  exact   to="/" className={s.navLink} activeClassName={s.selected}>News</NavLink>
        </>
    )
}

export default Nav
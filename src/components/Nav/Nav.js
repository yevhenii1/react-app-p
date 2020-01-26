import React from 'react'
import {NavLink} from "react-router-dom";

const Nav = (props) => {
    return (
        <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/profile">Profile</NavLink>
        </>
    )
}

export default Nav
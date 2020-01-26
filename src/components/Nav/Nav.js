import React from 'react'
import {NavLink} from "react-router-dom";

const Nav = (props) => {
    return (
        <>
            <NavLink to="/profile">Profile</NavLink>
            <NavLink to="/login">Login</NavLink>
        </>
    )
}

export default Nav
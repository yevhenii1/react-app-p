import React from 'react'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <div>
                <NavLink to="/login">Login</NavLink>
            </div>
        </header>
    )
}

export default Header
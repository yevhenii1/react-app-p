import React from 'react'
import Nav from "../Nav/Nav";
import s from './Header.module.css'

const Header = (props) => {
    return (
        <header>
            <Nav />
            <div>
                {!!props.isAuth && <a href="#" onClick={props.handleSignOut}>Log out</a>}
            </div>
        </header>
    )
}

export default Header
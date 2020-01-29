import React from 'react'
import {Link} from "react-router-dom";
import s from './Page404.module.css'

const Page404 = (props) => {
    return (
        <div className={s.wrapper}>
            <div>
                <h1>404</h1>
                <h4>Страница не найдена</h4>
                <Link to="/">На Главну</Link>
            </div>
        </div>
    )
}

export default Page404
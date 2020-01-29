import React from 'react'
import preloader from '../../../assets/img/preloader.svg'
import classes from './Preloader.module.css'

const Preloader = () => {
    return (
        <div className={classes.preloader}>
            <img src={preloader} alt="Loading" />
        </div>
    )
}

export default  Preloader
import React from 'react'
import s from './News.module.css'

const News = (props) => {
    return (
        <div className={s.wrapper}>
            <h3>News</h3>
            {props.newsList.map(item => (
                <div key={item.id}>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                </div>
            ))
            }
        </div>
    )
}

export default News
import React from 'react'
import Preloader from "../commen/Preloader/index";

const Profile = (props) => {
    let socialSorted = []
    if (props.social) {
        [...props.social].forEach((socialItem, index) => {
            if (socialItem.label === 'web') {
                const webSocial = props.social.splice(index, 1)
                socialSorted = [].concat(webSocial, props.social)
            }
        })
    }
    if (!!props.isLoading) {
        return <Preloader />
    }
    return (
        <div>
            <h1>Profile</h1>

            <span>Город: {props.city}</span>
            <h4>Знание языков:</h4>
            <ul>
                {props.languages.map(l => <li key={l}>{l}</li>)}
            </ul>
            <h4>Ссылки:</h4>
            <ul>
                {socialSorted.map(s =>
                    <li key={s.label}>
                        <a href={s.link}>{s.label}</a>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Profile
import React, {useState, useEffect} from 'react'
import {Field, reduxForm} from "redux-form";
import s from './Login.module.css'

const Login = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.loginWrapper}>
                <h1>Login</h1>
                {!!props.error_message && <span className={s.loginError}>* {props.error_message}</span>}
                <LoginReduxForm onSubmit={props.handleLogin}  handleSignOut={props.handleSignOut}/>
            </div>
        </div>
    )
}

const LoginForm = (props) => {
    const [email, setEmail] = useState('max@test.com')
    const [password, setPassword] = useState('12345')

    useEffect(() => {
        props.initialize({email: email, password: password })
    })
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    type="text"
                    component="input"
                    name="email"
                    placeholder="E-mail"
                />
            </div>
            <div>
                <Field
                    type="text"
                    component="input"
                    name="password"
                    placeholder='password'
                />
            </div>
            <button>Log In</button>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
export default Login
import React from 'react'
import {Field, reduxForm} from "redux-form";

const Login = (props) => {
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={props.handleLogin} />
        </div>
    )
}

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    type="text"
                    component="input"
                    name="username"
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
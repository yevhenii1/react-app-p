import React, {useState, useEffect} from 'react'
import {Field, reduxForm} from "redux-form";
import s from './Login.module.css'
import {Input} from "../commen/forms/FormsControls/FormControls";
import {minLengthCreator, required} from "../../utils/validator";
// import {Props as submitting} from "../../../node_modules/redux-form/es/ConnectedFields.types";


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
const minLenhth = minLengthCreator(5)
const LoginForm = (props) => {
    // const [email, setEmail] = useState('max@test.com')
    // const [password, setPassword] = useState('12345')
    //
    // useEffect(() => {
    //     props.initialize({email: email, password: password })
    // })
    const {handleSubmit, submitting, pristine} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    type="text"
                    component={Input}
                    name="email"
                    placeholder="E-mail"
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    type="text"
                    component={Input}
                    name="password"
                    placeholder='password'
                    validate={[required, minLenhth]}
                />
            </div>
            <button type="submit" disabled={pristine || submitting}>Log In</button>
        </form>
    )
}
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
export default Login
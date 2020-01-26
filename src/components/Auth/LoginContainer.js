import React from 'react'
import Login from './Login'
import {connect} from "react-redux";
import {logIn, signOut} from '../../actions/auth'

class LoginContainer extends React.Component {

    handleLogin = (email, password) => {
        this.props.logIn(email, password)
    }
    handleSignOut = () => {
        this.props.signOut()
    }

    render() {
        return (
            <Login
                handleLogin={this.handleLogin}
                handleSignOut={this.handleSignOut}
                isA={this.props.auth.isAuth}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth

    }
}

export default connect(mapStateToProps, {logIn, signOut})(LoginContainer)

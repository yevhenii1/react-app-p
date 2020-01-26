import React from 'react'
import Login from './Login'
import {connect} from "react-redux";
import {logIn} from '../../actions/auth'

class LoginContainer extends React.Component {

    handleLogin = (email, password) => {
        this.props.logIn(email, password)
    }

    render() {
        return (
            <Login
                handleLogin={this.handleLogin}
                error_message={this.props.auth.error_message}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {logIn})(LoginContainer)

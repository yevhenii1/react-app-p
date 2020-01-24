import React from 'react'
import Login from './Login'
import {connect} from "react-redux";
import {logIn} from '../../reducers/auth'

class LoginContainer extends React.Component {

    hadleLogin = (username, password) => {
        this.props.logIn(username, password)
    }

    render() {
        return (
            <Login handleLogin={this.hadleLogin}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {logIn})(LoginContainer)

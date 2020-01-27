import React from 'react'
import {connect} from "react-redux";
import Header from "./Header";
import {signOut} from "../../actions/auth";

class HeaderContainer extends React.Component {

    handleSignOut = (e) => {
        e.preventDefault()
        this.props.signOut()
    }
    render() {
        return (
            <Header
                handleSignOut={this.handleSignOut}
                isAuth={this.props.auth.isAuth}
                id={this.props.auth.id}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default  connect(mapStateToProps, {signOut})(HeaderContainer)
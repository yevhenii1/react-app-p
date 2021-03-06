import React from 'react'
import {connect} from "react-redux";
import {getUserInfo} from "../../actions/userInfo";
import Profile from "./Profile";
import {Redirect} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        this.props.getUserInfo()
    }

    render() {
        return (
            <>
                {!this.props.auth.isAuth && <Redirect to="/" />}
                <Profile
                    city={this.props.userInfo.city}
                    languages={this.props.userInfo.languages}
                    social={this.props.userInfo.social}
                    isLoading={this.props.userInfo.isLoading}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        userInfo: state.userInfo,
    }
}

export default connect(mapStateToProps, {getUserInfo})(ProfileContainer)
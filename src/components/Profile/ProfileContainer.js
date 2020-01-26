import React from 'react'
import {connect} from "react-redux";
import history from '../../utils/history'

class ProfileContainer extends React.Component {



    render() {
        {!this.props.auth.isAuth && history.push('/login')}
        return (
            <h1>Profile</h1>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {})(ProfileContainer)
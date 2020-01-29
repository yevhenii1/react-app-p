import React from 'react'
import {connect} from "react-redux";
import {getNews} from "../../actions/news";
import News from "./News";

class NewsContainer extends React.Component {
    componentDidMount() {
        this.timer = setTimeout(() => {
            this.props.getNews()
        }, 1800)
    }
    componentWillUnmount() {
        clearTimeout(this.timer)
    }
    render() {

        return (
            <News
                newsList={this.props.news.newsList}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        news: state.news,
    }
}

export default connect(mapStateToProps, {getNews})(NewsContainer)
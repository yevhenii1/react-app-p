import React from 'react'
import {connect} from "react-redux";
import {getNews} from "../../actions/news";
import News from "./News";

class NewsContainer extends React.Component {
    componentDidMount() {
          this.props.getNews()
    }

    render() {

        return (
            <News
                newsList={this.props.news.newsList}
                isLoading={this.props.news.isLoading}
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
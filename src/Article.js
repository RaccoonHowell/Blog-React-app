import React, { Component } from "react";
import api from "./api";
import Comments from "./Comments";

class Article extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            article: {}
        }
    }

    componentDidMount() {
        const { id } = this.props;

        api.get(`/articles/${id}`).then(({ data }) => { 
            this.setState({
                loaded: true,
                article: data.data
            });
        }); 
    }

    render() { 
        const { article, loaded } = this.state;
        const { id } = this.props;

        return !loaded ? <p>Loading...</p> : ( 
            <>
                <h1>Article</h1> 
                <h1>{ article.title }</h1>
                <p>{ article.article }</p>
                <p>{ article.tags }</p>
                <Comments id={ id } />
            </> 
        );
    }
}

export default Article;

// Create a component <Article id={ number }> which shows a specific article based on its id. It should show when you visit /articles/{id}
// Update your <Articles> component to link through to <Article>
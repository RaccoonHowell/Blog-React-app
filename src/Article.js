import React, { Component } from "react";
import api from "./api";

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
        
        let { article, loaded } = this.state;

        return !loaded ? <p>Loading...</p> : ( 
            <>
                <h2>Article</h2> 
                <h1>{ article.title }</h1>
                <p>{ article.article }</p>
                <p>{ article.tags }</p>
            </> 
        );
    }
}

export default Article;

// Create a component <Article id={ number }> which shows a specific article based on its id. It should show when you visit /articles/{id}
// Update your <Articles> component to link through to <Article>
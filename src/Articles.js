import React, { Component } from "react";
import api from "./api";

class Articles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            articles: []
        }
    }

    componentDidMount() {
        api.get("articles").then(({ data }) => { 
            this.setState({ 
                loaded: true,
                articles: data.data
            });
        }); 
    }

    render() {
        let { articles, loaded } = this.state;

        return !loaded ? <p>Loading...</p> : ( 
            <>
                <h2>Articles</h2> 
                <ul className="list-group">
                    { articles.map(article => (
                        <li
                            key={ article.id }
                            className="list-group-item" 
                        >
                            { article.title } 
                        </li>
                    )) } 
                </ul>
            </> 
        );
    }  
}

export default Articles;
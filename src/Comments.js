import React, { Component } from "react";
import api from "./api";

class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            comments: []
        }
    }

    componentDidMount() {
        const { id } = this.props;

        api.get(`/articles/${id}/comments`).then(({ data }) => { 
            this.setState({ 
                loaded: true,
                comments: data.data
            });
        }); 
    }

    render() {
        
        const { comments, loaded } = this.state;

        return !loaded ? <p>Loading...</p> : ( 
            <>
                <h2>Article comments</h2> 
                { comments.length === 0 ? <p>No comments</p> : (
                    <ul className="list-group">
                        { comments.map(comment => (
                            <li
                                key={ comment.id }
                                className="list-group-item"   
                            > 
                                <h4 className="list-group-item-heading">{ comment.email }</h4>
                                <p className="list-group-item-text">{ comment.comment }</p>
                            </li>
                        )) } 
                    </ul>
                )}
            </> 
        );
    }  
}

export default Comments;

// Create a component <Comments articleID={ number }> which lists all of the comments for a given article.
// Update your <Article> component to use the <Comments> component at the bottom
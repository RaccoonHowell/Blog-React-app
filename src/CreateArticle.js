import React, { Component } from "react";
import api from "./api";

class CreateArticle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            title: "",
            article: "",
            tags: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleArticle = this.handleArticle.bind(this);
        this.handleTags = this.handleTags.bind(this);
    }

    handleTitle(e) {this.setState({title: e.currentTarget.value})}

    handleArticle(e) {this.setState({article: e.currentTarget.value})}

    handleTags(e) {this.setState({tags: e.currentTarget.value})}

    handleSubmit(e) {
        e.preventDefault();
        // get the values of some controlled components
        let { title, article, tags } = this.state;
        // post data to an API
        api.post("/articles", { title: title, article: article, tags: tags.split(", ") }).then(() => {
            // once the server responds successfully, clear the inputs
            this.setState({ title: "", article: "", tags: "" }); });
    }

    render() {
        let { title, article, tags } = this.state;
        
        return (
            <>
                <h1>Create article</h1>

                <form onSubmit={ this.handleSubmit }>
                    <label>Title</label>
                    <input onChange={ this.handleTitle } value={ title }/>

                    <label>Article</label>
                    <input onChange={this.handleArticle } value={ article }/>

                    <label>Tags</label>
                    <input onChange={this.handleTags } value={ tags } />

                    <button>Create</button>
                </form>
            </>
        )
    }
}

export default CreateArticle;

// Create a component <CreateArticle> which allows you to submit an article to the API. You should be able to get to it by visiting /articles/create
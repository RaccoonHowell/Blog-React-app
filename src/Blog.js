import React from "react";
import Articles from "./Articles";
import Article from "./Article";
import CreateArticle from "./CreateArticle";
import {
    BrowserRouter as Router,
    Route, Switch
    } from "react-router-dom";

const Blog = () => (
    <Router>

        <Switch>

            <Route exact path="/articles/create" component={ CreateArticle } />

            <Route exact path="/articles/:id" render={ ({ match }) => ( <Article id={ match.params.id } /> ) } />

            <Route exact path ="/articles" component={ Articles } />

            <Route exact path="/" component={ Articles } />

        </Switch>

    </Router>
);

export default Blog;
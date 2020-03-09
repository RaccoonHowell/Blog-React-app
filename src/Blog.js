import React from "react";
import Articles from "./Articles";
import Article from "./Article";

import {
    BrowserRouter as Router,
    Route, Switch
    } from "react-router-dom";

const Blog = () => (
    <Router>

        <Switch>

            <Route path="/articles/:id" render={ ({ match }) => ( <Article id={ match.params.id } /> ) } />

            <Route path ="/articles" component={ Articles } />

            <Route path="/" component={ Articles } />
        
        </Switch>


    </Router>
);

export default Blog;
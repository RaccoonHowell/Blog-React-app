import React from "react";
import Articles from "./Articles";
import Article from "./Article";

import {
    BrowserRouter as Router,
    Route, Switch
    } from "react-router-dom";

const Blog = () => (
    <Router>
        <Articles />
        <Article id={ number } />
    </Router>
);

export default Blog;
import React from "react";
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from "../todo/todo";
import About from "../about/About";
import NotFound from "../notfound/NotFound";

export default function Routes() {
  return (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Route path='/notfound' component={NotFound} />
        <Redirect from ='*' to='/todos' />
    </Router>
  )
}

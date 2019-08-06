import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

import MusicstoresNew from "./musicstores/new";
import MusicstoresIndex from "./musicstores/index";
import MusicstoresShow from "./musicstores/show";
import MusicstoresEdit from "./musicstores/edit";
import MusicstoresDestroy from "./musicstores/destroy";

import Register from "./sessions/register";
import Login from "./sessions/login";
import Logout from "./sessions/logout";

function Routes () {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/about" component={ About } />
      <Route exact path="/contact" component={ Contact } />
      <Route exact path="/musicstores/new" component={ MusicstoresNew } />
      <Route exact path="/musicstores" component={ MusicstoresIndex } />
      <Route exact path="/musicstores/:id" component={ MusicstoresShow } />
      <Route exact path="/musicstores/:id/edit" component={ MusicstoresEdit } />
      <Route exact path="/musicstores/:id/destroy" component={ MusicstoresDestroy } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/logout" component={ Logout } />
    </Switch>
  );
}

export default Routes;
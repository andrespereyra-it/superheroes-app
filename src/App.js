import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import HeroDetail from "./components/Hero/HeroDetail";
import Login from "./components/Login";
import Header from "./components/Header/index";
import { UserContextProvider } from "./context/UserContext";

import "./App.css";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <Header />
          <Switch>
            <Route component={Login} path="/login"></Route>
            <Route component={HeroDetail} path="/detail"></Route>
            <Route component={Home} path="/"></Route>
          </Switch>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;

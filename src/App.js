import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/UI/NavBar/NavBar";
import Movies from "./containers/Movies/Movies";
import LoginForm from "./components/UI/Form/LoginForm";
import RegisterForm from "./components/UI/Form/RegisterForm";
import MovieForm from "./components/UI/Form/MovieForm";
import NotFound from "./components/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <ToastContainer />
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" render={props => <Movies {...props} />} />
            <Redirect from="/" exact to="/movies" />
            <Route path="/not-found" component={NotFound} />
            <Redirect path="/" to="/not-found" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

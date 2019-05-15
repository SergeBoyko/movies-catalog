import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/UI/NavBar/NavBar";
import Movies from "./containers/Movies/Movies";
import LoginForm from "./components/UI/Form/LoginForm/LoginForm";
import RegisterForm from "./components/UI/Form/RegisterForm/RegisterForm";
import MovieForm from "./components/UI/Form/MovieForm/MovieForm";
import Customers from "./containers/Customers/Customers";
import Rentals from "./containers/Rentals/Rentals";
import LoginOut from "./components/LogOut/LogOut";
import NotFound from "./components/NotFound/NotFound";
import auth from "./services/authService";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <div >
        <div style={{ backgroundColor: "#f8f9fa", height: '60px', width: '100%', padding: 'none', margin: 'none' }}></div>
        <ToastContainer />
        <NavBar user={user} admin={user && user.isAdmin} />
        <main className="container" data-test='MainContainer'>
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={LoginOut} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/register" component={RegisterForm} />
            <Route
              path="/movies/:id"
              render={props => {
                if (!user) return <Redirect to="/login" />;
                return <MovieForm {...props} />;
              }}
            />
            <Route
              path="/movies"
              render={props => (
                <Movies {...props} user={user} admin={user && user.isAdmin} />
              )}
            />
            <Redirect from="/" exact to="/movies" />
            <Redirect from="/profile" exact to="/movies" />
            <Route path="/not-found" component={NotFound} />
            <Redirect path="/" to="/not-found" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
// import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import Teams from './components/Teams';
import NotFoundPage from './components/NotFoundPage';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
              <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link" activeClassName="active" exact={true}>Register</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/teams" className="nav-link" activeClassName="active" exact={true}>Teams</NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            <main role="main" className="container content">
              <Switch >
                <Route path="/" component={Register} exact={true} />
                <Route path="/teams" component={Teams} exact={true} />
                <Route component={NotFoundPage} />
              </Switch>
            </main>
            <footer className="container">
              <p>© Wilfrido Garcia</p>
            </footer>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;

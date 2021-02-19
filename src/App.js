import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './component/Admin/Admin';
import PrivateRoute from './component/Auth/PrivateRoute';
import Home from './component/Layout/Home';
import Navbar from './component/Layout/Navbar';
import store from './store';
import './styles/main.css';
export class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router>
          <Navbar />
          <Switch>
            <Route component={Home} path="/" exact />
            <PrivateRoute component={Admin} path="/admin" exact />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App

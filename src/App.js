import React, { Component } from "react";
import './App.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import Detail from './details'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Switch>
          <Route path="/:slug" component={Detail} ></Route>
          <Route path="/" component={Home} ></Route>
        </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;
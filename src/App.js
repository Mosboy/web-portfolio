import React,{Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import FrontView from "./component/FrontView/frontview"
import './App.css';

const App = () =>(
  <Router>
    <Route path="/" exact component={FrontView}/>
  </Router>
);

export default App;
import React, { Component } from 'react';
import './App.css';

import ValidatedLoginForm from './LoginForm/validatingLoginForm';
import  TableData  from './TableData/tableData';
import { BrowserRouter, Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <h1>Validated Login Form</h1>
        <ValidatedLoginForm />
      <Route path='/data' Component={TableData} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

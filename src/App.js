import './App.css';

import React, { Component } from 'react'
import Nav from './Comps/Nav';
import Page from './Comps/Page';
export default class App extends Component {
  
  render() {
    return (
      <div>
        <Nav/>
        <Page/>
      </div>
    )
  }
}

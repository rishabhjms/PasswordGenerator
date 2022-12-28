import './App.css';

import React, { Component } from 'react'
import Nav from './Comps/Nav';
import Page from './Comps/Page';
const color_palette = {
  darkBlue: '#111827',
  foregroundColor: '#fff'
}
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
export {color_palette}
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  clearField = () => {
  }
  formula = (event) => {
    let phrase_field = document.getElementById('phraseField')
    let length_field = document.getElementById('lengthField');
    let generated_pswd = document.getElementById('generated_pswd');
    let passphrase = phrase_field.value;
    let size = length_field.value.length;
    
  }
  render() {
    return (
      <div>
        <h1 className='font-bold text-3xl px-6 py-6'>Password Generator</h1>
        <div className='form_container grid space-y-6 px-6'>
          <section className='grid grid-flow-col'>
            <label htmlFor="length">Enter password length: </label>
            <input type="text" id='lengthField' />
          </section>
          <section className='grid grid-flow-col'>
            <label htmlFor="length">Enter a passphrase: </label>
            <input type="text" id='phraseField' />
          </section>
          <section className='grid grid-flow-col'>
            <label htmlFor="" className="s-chars">Include special characters</label>
            <input type="checkbox" className='justify-self-start' />
          </section>
          <section>
            <button className="btn" onClick={this.formula}>Generate</button>
          </section>
        </div>
        <div className='my-12 flex flex-col space-y-4'>
          <span className='font-bold text-3xl px-6'>Your password is </span>
          <code className='px-6' id='generated_pswd'></code>
          <section className='flex space-x-3'>
            <button className="btn w-1/5 mx-6">Copy password</button>
            <button className="btn w-1/5 mx-6" onClick={this.clearField}>Clear Field</button>
          </section>
        </div>
      </div>
    )
  }
}

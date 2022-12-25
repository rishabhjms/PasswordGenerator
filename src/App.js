import './App.css';

import React, { Component } from 'react'


const field = document.getElementById('generated_pswd')
const length_field = document.getElementById('lengthField');
export default class App extends Component {
  constructor(){
    super()
    this.state={
      field: document.getElementById('generated_pswd')
    }
    console.log(this.state.field)
  }
  componentDidMount() {
    // Runs when the the component is mounded
    const phrase_field = document.getElementById('phraseField')
    if (!(phrase_field.value)) {
      // If the passphrase field was empty, then a default text shall be displayed
      try {
        document.getElementById('generated_pswd').innerHTML = 'fill the passphrase field'
      } catch (err) {
        console.error("can't set default text to generated_pswd")
      }
    }
  }
  clearField = () => {
  }
  formula = (event) => {
    this.setState.field.innerHTML = 'fa'
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

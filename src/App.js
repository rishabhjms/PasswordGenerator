import './App.css';

import React, { Component } from 'react'
export default class App extends Component {
  constructor(){
    super();
    this.state={
      passwordFieldIsEmpty: true
    }
  }
  componentDidMount() {
    // Runs when the the component is mounded
    const phrase_field = document.getElementById('phraseField')
    if (!(phrase_field.value)) {
      // If the passphrase field was empty, then a default text shall be displayed
      try {
        // document.getElementById('generated_pswd').innerHTML = 'fill the passphrase field'
      } catch (err) {
        console.error("can't set default text to generated_pswd")
      }
    }
  }
  clearField = () => {
    document.getElementById('generated_pswd').innerHTML = ''
    document.getElementById('phraseField').value = ''
    document.getElementById('lengthField').value = ''
  }
  formula = (event) => {
    //Set customised value in field
    const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const field = document.getElementById('generated_pswd')
    const phrase_field = document.getElementById('phraseField')
    const length_field = document.getElementById('lengthField')
    for (let i = 0; i <= phrase_field.value.length; i++) {
      for (let k = 0; k <= alphabet.length; k++) {
        let charCodeArr = [];
        if (phrase_field.value[i].toUpperCase() === alphabet[k]) {
          // field.innerHTML += alphabet.indexOf(phrase_field.value[i].toUpperCase()) + 1 + Number(length_field.value) + " "
          field.innerHTML += phrase_field.value[i].charCodeAt(0)+Number(length_field.value)+" "
        }
      }
    }
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
          <section className='space-x-4 space-y-2'>
            <button className="btn" onClick={this.formula}>Generate</button>
            <button className="btn" onClick={this.clearField}>Empty fields</button>
            <button className="btn" >Copy password</button>
          </section>
        </div>
        <div className='my-12 flex flex-col space-y-4'>
          <span className='font-bold text-3xl px-6'>Your password is </span>
          <code className='px-6' id='generated_pswd'></code>
        </div>
      </div>
    )
  }
}

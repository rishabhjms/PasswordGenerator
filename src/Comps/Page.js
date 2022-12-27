import React, { Component } from 'react'

export default class Page extends Component {
    constructor() {
        super();
        this.state = {
            passwordFieldIsEmpty: true
        }
    }
    componentDidMount() {
        //* Runs when the the component is mounded
        const phrase_field = document.getElementById('phraseField')
        if (!(phrase_field.value)) {
            //* If the passphrase field was empty, then a default text shall be displayed
            try {
                //* document.getElementById('generated_pswd').innerHTML = 'fill the passphrase field'
            } catch (err) {
                console.error("can't set default text to generated_pswd")
            }
        }
    }
    clearField = () => {
        document.getElementById('generated_pswd').innerHTML = ''
        document.getElementById('phraseField').value = ''
        document.getElementById('lengthField').value = ''
        document.getElementById('codeField').value = ''
        document.getElementById('special_chars_tickbox').checked = false
    }
    formula = (event) => {
        //*Set customised value in field
        const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        const field = document.getElementById('generated_pswd')
        // const phrase_field = document.getElementById('phraseField')
        const codeField = document.getElementById('codeField')
        const lengthField = document.getElementById('lengthField')
        const special_chars = document.getElementById('special_chars_tickbox')
        const symbols = "!@#$ %^&*(){}[]=<>/:"
        if (Number(lengthField.value) < 8) {
            alert("Sir! Please enter a bigger length.")
        } else {
            for (let i = 0; i < Number(lengthField.value); i++) {
                let code = Number(codeField.value)
                let index = Math.floor(Math.random() * alphabet.length) + code
                if (index > alphabet.length) {
                    //*Checks if the alphabet iterator go beyonds the limit, then a default value is assigned to iterator 
                    index = Math.floor(Math.random() * alphabet.length)
                }
                if (special_chars.checked) {
                    //* Adds random special character if the checkbox is checked
                    let binary = Math.random()
                    if (binary < 0.5) {
                        binary = 0
                    } else {
                        binary = 1
                    }
                    if (index % 2 === 0) {
                        console.log(index)
                        //* Generates an lowercase letter if the index is divisble by 2
                        if (binary === 0) {
                            //* if binary==0 then special character shall not be added
                            field.innerHTML += alphabet[index].toLowerCase()
                        } else if (binary === 1) {
                            //* if binary==1 then a special character will be added
                            let f1 = Math.floor(Math.random() * symbols.length)
                            field.innerHTML += symbols[f1]
                            lengthField.value = field.innerHTML.length
                        }
                    } else if (index % 2 != 0) {
                        console.log(index)
                        if (binary === 0) {
                            //* if binary==0 then special character shall not be added
                            field.innerHTML += alphabet[index].toLowerCase()
                        } else if (binary === 1) {
                            //* if binary==1 then a special character will be added
                            let f1 = Math.floor(Math.random() * symbols.length)
                            field.innerHTML += symbols[f1]
                        }
                    }
                } else if (!special_chars.checked) {
                    if (index % 2 === 0) {
                        field.innerHTML += alphabet[index].toLowerCase()
                    } else {
                        field.innerHTML += alphabet[index].toUpperCase()
                    }
                }
            }
        }
    }
    copyToClip=()=>{
        let field = document.getElementById('generated_pswd').innerHTML;
        field.select();
        field.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(field.innerHTML);
    }
    render() {
        return (
            <div>
                <h1 className='font-bold text-3xl px-6 py-6'>Password Generator</h1>
                <div className='form_container grid space-y-6 px-6'>
                    <section className='grid grid-flow-col'>
                        <label htmlFor="length">Enter passcode: </label>
                        <input type="text" id='codeField' />
                    </section>
                    <section className='grid grid-flow-col'>
                        <label htmlFor="length">Enter a passphrase: </label>
                        <input type="text" id='phraseField' />
                    </section>
                    <section className='grid grid-flow-col'>
                        <label htmlFor="length">Enter length value:  </label>
                        <input type="text" id='lengthField' />
                    </section>
                    <section className='grid grid-flow-col'>
                        <label htmlFor="" className="s-chars">Include special characters</label>
                        <input type="checkbox" className='justify-self-start' id='special_chars_tickbox' />
                    </section>
                </div>
                <div className='my-12 flex flex-col space-y-4'>
                    <span className='font-bold text-3xl px-6'>Your password is </span>
                    <code className='px-6' id='generated_pswd'></code>
                </div>

                <section className='space-x-4 control_panel'>
                    <button className="btn" onClick={this.formula}>Generate</button>
                    <button className="btn" onClick={this.clearField}>Empty fields</button>
                    <button className="btn" onClick={this.copyToClip}>Copy password</button>
                </section>
            </div>
        )
    }
}

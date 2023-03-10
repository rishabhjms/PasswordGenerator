import React, { Component } from 'react'

export default class Page extends Component {
    clearField = async () => {
        document.getElementById('generated_pswd').innerHTML = ''
    }
    formula = async () => {
        //*Set customised value in field
        const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        const field = document.getElementById('generated_pswd')
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
                    let binary = Math.floor(Math.random() * 10)
                    if (binary < 5) {
                        binary = 0
                    } else {
                        binary = 1
                    }
                    if (index % 2 === 0) {
                        //* Generates an lowercase letter if the index is divisble by 2
                        if (binary === 0) {
                            //* if binary==0 then special character shall not be added
                            field.innerHTML += alphabet[index].toLowerCase()
                        } else if (binary === 1) {
                            //* if binary==1 then a special character will be added
                            let f1 = Math.floor(Math.random() * symbols.length)
                            console.log("F1 ->", f1)
                            field.innerHTML += symbols[f1]
                        }
                    } else if (index % 2 !== 0) {
                        if (binary === 0) {
                            //* if binary==0 then special character shall not be added
                            field.innerHTML += alphabet[index].toUpperCase()
                            console.warn("hey value of i was", alphabet[index].toUpperCase())
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
    copyToClip = async () => {
        let field = await document.getElementById('generated_pswd').innerHTML;
        navigator.clipboard.writeText(field)
        alert("Password was copied!")
    }
    render() {
        return (
            <div className='my-4'>
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
                    <span className='font-bold text-3xl px-6'>Your password is: </span>
                    <code className='px-6 text-blue-900' id='generated_pswd'></code>
                </div>

                <section className='space-x-4 px-6 control_panel'>
                    <button className="btn" onClick={this.formula}>Generate</button>
                    <button className="btn" onClick={this.clearField}>Empty fields</button>
                    <button className="btn" onClick={this.copyToClip}>Copy password</button>
                </section>
            </div>
        )
    }
}

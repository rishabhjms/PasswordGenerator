import { color_palette as cp } from '../App'
import React, { Component } from 'react'
import '../App.css'
export default class Nav extends Component {
  render() {
    return (
      <div className={`navbar flex flex-row bg-[${cp.darkBlue}] text-[${cp.foregroundColor}]`}>
        <section className='h-full w-full'>
          <ul className={`flex space-x-8 w-full h-full items-center justify-center select-none`}>
            <li>
              <img src="https://www.favicon.cc/logo3d/972907.png" alt="Password Generator logo" width={38} />
            </li>
            <li>HOME</li>
            <li>FORK</li>
            <li>ABOUT</li>
          </ul>
        </section>
      </div>
    )
  }
}

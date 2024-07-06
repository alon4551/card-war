import React, { useState, useEffect } from 'react'
import './style.css'
function Register(props) {

    const enterName = () => {
        let name = document.querySelector('#name').value
        if (name == '')
            alert('please enter your name')
        else {
            alert('Game starting now')
            props.action(name)
            props.route('game')
        }
    }

    return (
        <div className='container'>
            <h1>Wellcome to the Card war game</h1>
            <input id="name" type="text" placeholder='Enter Name' />
            <button onClick={enterName}>Register to Card Game</button>
        </div>
    )
}

export default Register
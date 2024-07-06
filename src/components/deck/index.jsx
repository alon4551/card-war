/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './style.css'
function Deck(props) {
    if (props.wave == -1)
        return (<></>)
    else {
        return (
            <div className={`container ${props.dir}`}   >
                <img className={`card ${props.status}`} src={`/public/assets/cards/${props.cards[props.wave].path}`} />
                <label>{props.name} :{props.score}</label>
            </div>
        )
    }
}

export default Deck
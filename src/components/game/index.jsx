/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Deck from '../deck'
import './style.css'
import { splitCards, shuffledDeck } from '../../../public/assets/cards'
function Game(props) {
    const [wave, setWave] = useState(-1)
    const [player, setPlayer] = useState({
        name: props.player,
        cards: shuffledDeck[0],
        score: 0
    })
    const [computer, setComputer] = useState({
        name: 'computer',
        cards: shuffledDeck[1],
        score: 0
    })
    let status = 'draw';
    useEffect(() => {
        if (wave != -1 && wave < player.cards.length - 1) {
            if (player.cards[wave].value > computer.cards[wave].value) {
                setPlayer({ ...player, name: props.player, score: player.score + 1 })
                status = 'won'
            }
            else if (player.cards[wave].value < computer.cards[wave].value) {
                setComputer({ ...computer, score: computer.score + 1 })
                status = 'lose'
            }
            else {
                status = 'draw'
            }
        }
        else {
            if (wave == -1) return
            if (player.score == computer.score) {
                props.setScore(0, 0)
                return
            }
            if (player.score > computer.score) {
                props.setScore(1, 0)
            }
            else
                props.setScore(0, 1)
            props.route('end')

        }
    }, [wave])
    const startWar = () => {
        setWave(wave + 1)
    }
    return (
        <>
            < Deck wave={wave} name={player.name} score={player.score} dir={'up'} key={player.name} cards={player.cards} />
            <div className='container'>
                <button onClick={startWar}>Play Game</button>
                <label>{wave != -1 ? `wave:${wave}` : ""}</label>
            </div>
            < Deck wave={wave} name={computer.name} score={computer.score} dir={'down'} key={computer.name} cards={computer.cards} />
        </>
    )
}

export default Game
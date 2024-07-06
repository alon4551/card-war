/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import './App.css'
import Game from './components/game'
import Register from './components/register'
import { extractCardsToArray, shuffleCards } from '../public/assets/cards'
import Ending from './components/end'

function App() {
  const [player, setPlayer] = useState('')
  const [cards, setCards] = useState([])
  const [score, setScore] = useState({
    player: 0,
    computer: 0
  })
  const [route, setRoute] = useState('register')
  const AddPoints = (playerPoints, computerPoints) => {
    setScore({
      player: score.player + playerPoints,
      computer: score.computer + computerPoints
    })
  }
  const restart = () => {
    setCards(shuffleCards())
    setRoute('game')
  }
  useEffect(() => {
    setCards(shuffleCards())
  }, []);
  return (
    <div className='main'>
      {
        route == 'register' ?
          <Register action={setPlayer} route={setRoute} /> :
          route == 'game' ? <Game cards={cards} route={setRoute} player={player} setScore={AddPoints} /> :
            route == 'end' ? <Ending player={player} score={score} restart={restart} /> :
              <></>

      }
    </div>
  )
}

export default App

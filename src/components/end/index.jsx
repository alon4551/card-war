import React from 'react'

function Ending(props) {
    const restart = () => {
        props.restart()
    }
    return (
        <div className='container'>
            <label>{props.player}:{props.score.player}
            </label>
            <label> vs</label>

            <label>
                computer:{props.score.computer}
            </label>
            <button onClick={restart}>Play Again</button>
        </div>
    )
}

export default Ending
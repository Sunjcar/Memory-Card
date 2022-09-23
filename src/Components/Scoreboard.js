import React from 'react'
import styledComponents from 'styled-components'

const Scoreboard = ({ currentScore, highScore }) => {
    return (
        <div className='game-score'>
            <CurrentScore>
                Current Score: {currentScore}
            </CurrentScore>
            <HighScore>
                High Score: {highScore}
            </HighScore>
        </div>

    )
}

export default Scoreboard

const CurrentScore = styledComponents.div`
padding:.5rem;
border-radius:10px;
background-color:green;
`
const HighScore =styledComponents.div`
padding:.5rem;
border-radius:10px;
background-color: #fde047`
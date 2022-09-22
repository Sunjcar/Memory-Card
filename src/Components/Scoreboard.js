import React from 'react'

const Scoreboard = ({ currentScore, highScore }) => {
    return (
       <div className='game-score'>
           <div>
           CurrentScore: {currentScore}
           </div>
           HighScore: {highScore}
       </div>

    )
}

export default Scoreboard

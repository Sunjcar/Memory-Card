import React from 'react'
import styledComponents from 'styled-components'


function Display({highScore}) {
  return (
    <Wrap>
        <h2>Game Over!</h2>
        <HighScore>Your high score is: {highScore}</HighScore>
        <p> Click on any card to start a new game!</p>
    </Wrap>
  )
}

export default Display

const Wrap = styledComponents.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:.5rem`

const HighScore =styledComponents.div`
padding:.5rem;
border-radius:10px;
background-color: #fde047`
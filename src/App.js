import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Scoreboard from './Components/Scoreboard';
import RandomizeArray from './Utils/RandomizeArray';

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [anime, setAnime] = useState([])
  const [clickedAnime, setClickedAnime] = useState([])

  const fetchAnime = async () => {
    const animeAPI = await fetch(`https://api.jikan.moe/v4/characters?orderby=mal_id`)
      .then(res => res.json())
    setAnime(RandomizeArray(animeAPI.data))
  }

  useEffect(() => {
    fetchAnime();
  }, [])


  const handleClickedAnime = (e) => {
    const animeName = e.target.parentNode.lastChild.textContent
    playGame(animeName)
    setAnime(RandomizeArray(anime))
  }


  const playGame = (name) => {
    if (clickedAnime.includes(name)) {
      resetGame()
    } else {
      const newScore = currentScore + 1
      if (newScore > highScore) {
        setHighScore(newScore)
        setCurrentScore(newScore)
        setClickedAnime((prevState) => [...prevState, name])
      }
    }
  }

  const resetGame = () => {
    setClickedAnime([])
    setCurrentScore(0)
  }

  console.log(currentScore)
  return (
    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <div className='content-wrap'>
        <Scoreboard
        currentScore={currentScore}
        highScore={highScore} />
        <Main
          handleClickedAnime={handleClickedAnime}
          anime={anime} />
      </div>
    </div>
  );
}

export default App;

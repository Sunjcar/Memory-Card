import { useState, useEffect } from 'react';
import './App.css';
import Display from './Components/Display';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import Scoreboard from './Components/Scoreboard';
import RandomizeArray from './Utils/RandomizeArray';

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [anime, setAnime] = useState([])
  const [clickedAnime, setClickedAnime] = useState([])
  const [display, setDisplay] = useState(true)

  const fetchAnime = async () => {
    const animeAPI = await fetch(`https://api.jikan.moe/v4/characters?orderby=mal_id&limit=15`)
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
      if (newScore > highScore)
        setHighScore(newScore)
      setCurrentScore(newScore)
      setClickedAnime((prevState) => [...prevState, name])
      setDisplay(true)
    }
  }

  const resetGame = () => {
    setDisplay(false)
    setClickedAnime([])
    setCurrentScore(0)
  }
  return (
    <div className="App">
      <div className='header'>
        <Header />
      </div>
      <div className='content-wrap'>
        {display ? <Scoreboard
          currentScore={currentScore}
          highScore={highScore} /> : <Display
          highScore={highScore} />}
        <Main
          handleClickedAnime={handleClickedAnime}
          anime={anime} />
      </div>
      <Footer />
    </div>
  );
}

export default App;

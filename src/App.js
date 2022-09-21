
import { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [anime, setAnime] = useState([])
  const [clickedAnime, setClickedAnime] = useState([])

  const fetchAnime = async () => {
    const animeAPI = await fetch(`https://api.jikan.moe/v4/characters`)
      .then(res => res.json())
    setAnime(animeAPI.data)
    console.log(animeAPI)
  }

  useEffect(() => {
    fetchAnime();
  }, [])


  return (
    <div className="App">
      <div className='header'>
        <Header/>
      </div>
      <div className='content-wrap'>
        <Main
          anime={anime} />
      </div>
    </div>
  );
}

export default App;

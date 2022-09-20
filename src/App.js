
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [anime, setAnime] = useState([])
  const [clickedAnime, setClickedAnime] = useState([])

  const fetchAnime = async (query) => {
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
    </div>
  );
}

export default App;

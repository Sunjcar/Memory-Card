import React from 'react'
import Card from './Card'

function Main({anime,handleClickedAnime}) {
    return (
        <div className='anime-list'>
            {anime.map(card => (
                <Card
                    handleClickedAnime={handleClickedAnime}
                    card={card}
                    key={card.mal_id} 
                    />
            ))}
        </div>
    )
}

export default Main
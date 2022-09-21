import React from 'react'
import Card from './Card'

function Main(props) {
    return (
        <div className='anime-list'>
            {props.anime.map(card => (
                <Card
                    card={card}
                    key={card.mal_id} />
            ))}
        </div>
    )
}

export default Main
import React from 'react'

function Card({ card, handleClickedAnime}) {
    return (
        <article className='anime-card' onClick={handleClickedAnime}>
            <a   target='_blank' rel='noreferrer'>
                <figure>
                    <img src={card.images.jpg.image_url} alt={card.name} />
                    <h6>{card.name}</h6>
                </figure>
            </a>
        </article>
    )
}

export default Card
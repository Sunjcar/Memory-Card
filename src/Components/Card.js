import React from 'react'

function Card({ card }) {
    return (
        <article className='anime-card'>
            <a /* href={card.url} */  target='_blank' rel='noreferrer'>
                <figure>
                    <img src={card.images.jpg.image_url} alt='Anime' />
                </figure>
                <h6>{card.name}</h6>
            </a>
        </article>
    )
}

export default Card
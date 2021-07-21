import React from 'react';
import { Link } from 'react-router-dom'
import s from './Game.module.css';

function Game({ props }) {
    let { name, background_image, genres, rating, id } = props;
    genres = genres?.join(', ')

    return (
        <div className={s.game}>
            <Link to={`/videogame/${id}`} className={s.link}>
                <div>
                    <span className={s.rating}>{`${rating}★`}</span>
                    <h5 className={s.title}>{name}</h5>
                    <img src={background_image || 'https://image.flaticon.com/icons/png/512/1176/1176359.png'} className={s.image} alt={'This background is not available'} />
                    <div className={s.genres}>
                        {genres}
                    </div>
                </div>
            </Link>
        </div>
    );
};
export default Game;
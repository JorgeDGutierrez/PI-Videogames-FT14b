import React from 'react';
import { Link } from 'react-router-dom'
import styles from './Game.module.css';

function Game({ props }) {
    let { name, background_image, genres, rating, id } = props;
    genres = genres?.join(', ')

    return (
        <div className={styles.game}>
            <Link to={`/videogame/${id}`} className={styles.link}>
                <div>
                    <span className={styles.rating}>{`${rating}★`}</span>
                    <h5 className={styles.title}>{name}</h5>
                    <img src={background_image || 'https://myvideogamelist.com/assets/images/default.png'} className={styles.image} alt={'This background is not available'} />
                    <div className={styles.genres}>
                        {genres}
                    </div>
                </div>
            </Link>
        </div>
    );
};
export default Game;
import React from 'react';
import s from './Landing.module.css';
import { Link } from 'react-router-dom'

function Landing() {
    return (
        
        <div className={s.landing}>
            <div>
            <audio controls autoPlay className={s.audio} src="audio3.wav" ></audio>
            </div>
            <h1 className={s.title}>Videogames App</h1>
            <Link to='/videogames'>
                <button className={s.boton}>Play!</button>
            </Link>
        </div>
    )
}
export default Landing;
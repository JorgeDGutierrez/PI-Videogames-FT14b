import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Landing.module.css';
function Landing(){
    return (
        <div className={styles.landing}>
            <h1 className={styles.title}>Videogames App</h1>
            <Link to='/videogames'>
            <button className={styles.boton}>Entrar</button>
            </Link>
        </div>

    )
}

export default Landing;
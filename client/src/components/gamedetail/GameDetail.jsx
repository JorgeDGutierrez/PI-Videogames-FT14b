import React, { useEffect } from 'react';
import s from './GameDetail.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getVideogameDetail } from '../../redux/actions';
import Navbar from '../navbar/Navbar';
 //import Loading from '../loading/Loading';
import { useParams } from 'react-router-dom';

function GameDetail() {
    const dispatch = useDispatch();
    const params = useParams();
    const { idVideogame } = params
    const videogameDetail = useSelector(state => state.videogameDetail)

    useEffect(() => {
        dispatch(getVideogameDetail(idVideogame))
    }, [dispatch, idVideogame])

    return (
        <div className={s.gamedetail} >
            <Navbar />
            <div className={s.wrapper}>
                <div className={s.container}>
                    {videogameDetail ? <div>
                        <h3 className={s.name}>{videogameDetail.name}</h3>
                        <img className={s.image} src={videogameDetail.background_image || 'https://www.eleconomista.com.mx/__export/1581119523386/sites/eleconomista/img/2020/02/07/que-son-esports.jpg_423392900.jpg'} alt="" />
                        <p className={s.description}>{videogameDetail.description.replace(/(<([^>]+)>)/ig, '')}</p>
                        <p className={s.genres}>{`Genres: ${videogameDetail.genres.join(', ')}`}</p>
                        <p className={s.genres}>{`Platforms: ${typeof videogameDetail.platforms === 'string' ? videogameDetail.platforms : videogameDetail.platforms.join(', ')}`}</p>
                        <p className={s.genres}>{`Release Date: ${videogameDetail.released || 'None'}`}</p>
                        <p className={s.genres}>{`Rating: ★ ${videogameDetail.rating}`}</p>

                    </div> : <h1>Cargando</h1>}
                </div>
            </div>
        </div >
    )
}

export default GameDetail;
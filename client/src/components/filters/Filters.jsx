import React from 'react';
import { useDispatch } from 'react-redux';
import { /* filterByDate, */ filterByGenres, filterDB, getVideogames, sortByAlphabet, sortByRating } from '../../redux/actions';
import s from './Filters.module.css';
import './Filtes.css'


function Filters() {
    const dispatch = useDispatch();
    const handleFilter = (e) => {
        dispatch(filterByGenres(e.target.value));
        
    }
    const handleAlphabet = (e) => {
        dispatch(sortByAlphabet(e.target.value));
    }
    const handleRating = (e) => {
        dispatch(sortByRating(e.target.value));
    }
    const handleDB = (e) =>  {
        
        dispatch(filterDB(e.target.value));
        
    }
    const handleGames = (e) => {
        dispatch(getVideogames(e.target.value));
    }
    /* const handleDate = (e) => {
        dispatch(filterByDate(e.target.value));
    } */
    
    
    return (
        <div>
            <div className={s.container}>
                <label htmlFor="genres">
                    <span class="input-field col s12" /* className={s.span} */>Filter by Genres</span>
                </label>
                <select id='genres' onChange={handleFilter} className={s.select}>
                    <option value=''>Default</option>
                    <option value="Action">Action</option>
                    <option value="Indie">Indie</option>
                    <option value="Adventure">Adventure</option>
                    <option value="RPG">RPG</option>
                    <option value="Strategy">Strategy</option>
                    <option value="Shooter">Shooter</option>
                    <option value="Casual">Casual</option>
                    <option value="Simulation">Simulation</option>
                    <option value="Puzzle">Puzzle</option>
                    <option value="Arcade">Arcade</option>
                    <option value="Platformer">Platformer</option>
                    <option value="Racing">Racing</option>
                    <option value="Massively Multiplayer">Massively Multiplayer</option>
                    <option value="Sports">Sports</option>
                    <option value="Fighting">Fighting</option>
                    <option value="Family">Family</option>
                    <option value="Board Games">Board Games</option>
                    <option value="Educational">Educational</option>
                    <option value="Card">Card</option>
                </select>
            </div>
            <div className={s.container}>
                <label htmlFor="order">
                    <span className={s.span}>Order by Alphabet</span>
                </label>
                <select id="order" onChange={handleAlphabet} className={s.select}>
                    <option value=''>Default</option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                </select>
            </div>
            <div className={s.container}>
                <label htmlFor="orderRating">
                    <span className={s.span}>Order by Rating</span>
                </label>
                <select id="orderRating" onChange={handleRating} className={s.select}>
                    <option  value="">Default</option>
                    <option value="high">Highest Rated ★</option>
                    <option value="less">Less Rated ☆</option>
                </select>
            </div>
            <div className={s.container}>
                <label htmlFor="filterDB">
                    
                </label>
                
                    <button className={s.boton} id="filterDB" onClick={handleGames}   value="Default">Videogames</button>
                    

            </div>
            <div className={s.container}>
                <label htmlFor="filterDB">
                    
                </label>

                    <button className={s.boton} id="filterDB" onClick={handleDB}   value="status">VideoJuegos creados</button>

            </div>
                {/* <div className={s.container}>
                    <form >
                    <label htmlFor="filterDate">
                        <span className={s.span}>filter by date</span>
                        <input className={s.input} name='released' onChange={handleDate}  type="month"  id="fecha" class="form-control"
                        required />                       
                    </label>                   
                    </form>
                </div> */}
        </div>
    )
}

export default Filters;
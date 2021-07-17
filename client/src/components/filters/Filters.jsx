import React from 'react';
import { useDispatch } from 'react-redux';
import { filterByGenres, sortByAlphabet, sortByRating } from '../../redux/actions';
import styles from './Filters.module.css';

function Filters(){
    const dispatch = useDispatch();
    const handleFilter = (ele) =>{
        dispatch(filterByGenres(ele.target.value));
        
    }
    const handleAlphabet = (ele) =>{
        dispatch(sortByAlphabet(ele.target.value));
    }
    const handleRating = (ele) =>{
        dispatch(sortByRating(ele.target.value));
    }
    return (
        <div>
            <div className={styles.container}>
                <label htmlFor="genres">
                    <span className={styles.span}>Filter by Games</span>
                </label>
                    <select id='genres' onChange={handleFilter} className={styles.select}>
                        <option value=''>Default</option>
                        <option value='Action'>Action</option>
                        <option value='Indie'>Indie</option>
                        <option value='Adventure'>Adventure</option>
                        <option value='RPG'>RPG</option>
                        <option value='Strategy'>Strategy</option>
                        <option value='Shooter'>Shooter</option>
                        <option value='Casual'>Casual</option>
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
            <div className={styles.container}>
                <label htmlFor="order">
                    <span className={styles.span}>Order by Alphabet</span>
                </label>
                <select id="order" onChange={handleAlphabet} className={styles.select}>
                    <option value="">Default</option>
                    <option value="az">A-Z</option>
                    <option value="za">Z-A</option>
                </select>
            </div>
            <div className={styles.container}>
                <label htmlFor="orderRating">
                    <span className={styles.span}>Order by Rating</span>
                </label>
                <select id="orderRating" onChange={handleRating} className={styles.select}>
                    <option value="">Default</option>
                    <option value="high">Highest Rated ★</option>
                    <option value="less">Less Rated ☆</option>
                </select>
            </div>
        </div>
    )

}
export default Filters
import React, { useState } from 'react';
import styles from './CreateGame.module.css'
import Navbar from '../navbar/Navbar'
import axios from 'axios';

function CreateGame() {
    const [errors, setErrors] = useState({ form: 'Must complete the form' });
    const [form, setForm] = useState({
        name: '',
        description: '',
        released: '',
        rating: 0,
        genres: [],
        platforms: ''
    });

    const handleChange = e => {
        if (e.target.parentNode.parentNode.id === 'genres') {
            
            
            if (e.target.checked) {
                setForm(prevState => ({
                    ...prevState,
                    genres: form.genres.concat(e.target.value)
                }))
            } else {
                setForm(prevState => ({
                    ...prevState,
                    genres: form.genres.filter(x => e.target.value !== x)
                }))
            }
        }
        if (e.target.parentNode.parentNode.id === 'platforms') {
            if (e.target.checked) {
                setForm(prevState => ({
                    ...prevState,
                    platforms: form.platforms.concat(e.target.name)
                }))
            } else {
                setForm(prevState => ({
                    ...prevState,
                    platforms: form.platforms.filter(x => e.target.name !== x)
                }))
            }
        }
        if (e.target.type !== 'checkbox') {
            setForm(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value
            }))
        }
        setErrors(validate({
            ...form,
            [e.target.name]: e.target.value
            
        }))
    }
    const validate = form => {
        let errors = {};
        if (!form.name) {
            errors.name = 'Game Name is required';
        } else if (form.name.length < 4) {
            errors.name = 'Game Name must have at least 4 characters';
        } 
        

        if (!form.description) {
            errors.description = 'Description is required';
        } else if (form.description.length < 8) {
            errors.description = 'Description must have at least 8 characters'
        }
        if (!form.rating) {
            errors.rating = 'Rating is required';
        } else if (!/^[1-5]$/.test(form.rating)) {
            errors.rating = 'Rating must be between 1 and 5';
        }
        
        return errors;
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        e.target.reset()
       
        
        validate(form);
        let checkboxsErrors = []
        if (form.genres.length < 1) checkboxsErrors.push('Genres is required');
        if (form.platforms.length < 1) checkboxsErrors.push('Platforms is required');
        if (Object.values(errors).length || checkboxsErrors.length) {
        
            return alert(Object.values(errors).concat(checkboxsErrors).join('\n'));
        }

        axios.post('http://localhost:3001/videogame', form)
        alert(`${form.name} created succesfully`)
       
        
    }
    

    return (
        <div className={styles.crearJuego}>
            <Navbar />
            <div className={styles.wrapper}>
                <div className={styles.contenedor}>
                    <h1 className={styles.title}>Create your own Game</h1>
                    <form onSubmit={handleSubmit} onChange={handleChange}>
                        <label htmlFor='name'>Name: </label>
                        <br />
                        <input placeholder='Name' type="text" id='name' className={errors.name && styles.error} name='name' />
                        <br />
                        <label htmlFor="description">Description: </label>
                        <br />
                        <textarea name='description' placeholder='Description...' className={`${errors.description ? styles.error : ''} ${styles.textarea}`} id="description" cols="30" rows="3" />
                        <br />
                        <label htmlFor="date">Release Date: </label>
                        <br />
                        <input name='released' className={errors.released && styles.error} type="date" id="date" required />
                        <br />
                        <label htmlFor="rating">Rating: </label>
                        <br />
                        <input name='rating' className={errors.rating && styles.error} placeholder='Rate del 1 to 5' type="number" id="rating" min= '1' max='5' maxLength='1' />
                        <br />
                        <div id='genres' className={styles.genresContenedor}>
                            <label className={styles.labelTitle}>Genres </label>
                            <div className={styles.divgenre}>
                                <label htmlFor="Action">Action</label>
                                <input name='Action' value='Action' type="checkbox" id="Action" />
                            </div>
                            <div className={styles.divgenre}>
                                <label htmlFor="Indie">Indie</label>
                                <input name='Indie' value='Indie' type="checkbox" id="Indie" />
                            </div>
                            <div className={styles.divgenre}>
                                <label htmlFor="Adventure">Adventure</label>
                                <input name='Adventure' value='Adventure' type="checkbox" id="Adventure" />
                            </div>
                            <div className={styles.divgenre}>
                                <label htmlFor="RPG">RPG</label>
                                <input name='RPG' value='RPG' type="checkbox" id="RPG" />
                            </div>
                            <div className={styles.divgenre}>
                                <label htmlFor="Strategy">Strategy</label>
                                <input name='Strategy' value='Strategy' type="checkbox" id="Strategy" />
                            </div>
                            <div className={styles.divgenre}>
                                <label htmlFor="Shooter">Shooter</label>
                                <input name='Shooter' value='Shooter' type="checkbox" id="Shooter" />
                            </div>
                            <div className={styles.divgenre}>
                                <label htmlFor="Casual">Casual</label>
                                <input name='Casual' value='Casual' type="checkbox" id="Casual" />
                            </div>
                            <div className={styles.divgenre}>
                                <label htmlFor="Simulation">Simulation</label>
                                <input name='Simulation' value='Simulation' type="checkbox" id="Simulation" />
                            </div>
                            <div className={styles.divgenre}>
                                <label htmlFor="Puzzle">Puzzle</label>
                                <input name='Puzzle' value='Puzzle' type="checkbox" id="Puzzle" />
                            </div>
                            <div className={styles.divgenre}>
                                <label htmlFor="Arcade">Arcade</label>
                                <input name='Arcade' value='Arcade' type="checkbox" id="Arcade" />
                            </div>
                            <div className={styles.divgenre}>
                                <label htmlFor="Platformer">Platformer</label>
                                <input name='Platformer' value='Platformer' type="checkbox" id="Platformer" />
                            </div>
                            <div className={styles.divgenre}>
                                <label htmlFor="Racing">Racing</label>
                                <input name='Racing' value='Racing' type="checkbox" id="Racing" />
                            </div>
                            <div className={styles.divgenre}>
                                <label htmlFor="Massively-Multiplayer">Massively-Multiplayer</label>
                                <input name='Massively-Multiplayer' value='Massively-Multiplayer' type="checkbox" id="Massively-Multiplayer" />
                            </div>
                            <div className={styles.divgenre}>
                                <label htmlFor="Sports">Sports</label>
                                <input name='Sports' value='Sports' type="checkbox" id="Sports" />
                            </div>
                            <div className={styles.divgenre}>
                                <label htmlFor="Fighting">Fighting</label>
                                <input name='Fighting' value='Fighting' type="checkbox" id="Fighting" />
                            </div>
                        </div>
                        {/* END GENRES */}
                        <div id='platforms' className={styles.platformsContainer}>
                            <label className={styles.labelTitle}>Platforms </label>
                            <div className={styles.divgenre}>
                                <label htmlFor="PC">PC</label>
                                <input name='PC' type="checkbox" id="PC" />
                            </div>
                            <div className={styles.divgenre}>
                                <label htmlFor="iOS">iOS</label>
                                <input name='iOS' type="checkbox" id="iOS" />
                            </div>
                            <div className={styles.divgenre}>
                                <label htmlFor="Android">Android</label>
                                <input name='Android' type="checkbox" id="Android" />
                            </div>
                            <div className={styles.divgenre}>
                                <label htmlFor="macOS">macOS</label>
                                <input name='macOS' type="checkbox" id="macOS" />
                            </div>
                            <div className={styles.divgenre}>
                                <label htmlFor="PlayStation 4">PlayStation 4</label>
                                <input name='PlayStation 4' type="checkbox" id="PlayStation 4" />
                            </div>
                            <div className={styles.divgenre}>
                                <label htmlFor="PlayStation 5">PlayStation 5</label>
                                <input name='PlayStation 5' type="checkbox" id="PlayStation 5" />
                            </div>
                            <div className={styles.divgenre}>
                                <label htmlFor="XBOX">XBOX</label>
                                <input name='XBOX' type="checkbox" id="XBOX" />
                            </div>
                            <div className={styles.divgenre}>
                                <label htmlFor="PS Vita">PS Vita</label>
                                <input name='PS Vita' type="checkbox" id="PS Vita" />
                            </div>
                        </div>
                        <br />
                        <button className={styles.boton}  type='submit' >Create</button>
                        {/* <button  className={styles.botonBorrar} type="reset" value="Borrar información"> Borrar formulario</button> */}
                        
                    
                        
                    </form>
                </div>
            </div>
        </div>
    )
    
}
export default CreateGame;
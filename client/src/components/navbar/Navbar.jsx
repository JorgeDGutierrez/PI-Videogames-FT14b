import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import s from './Input.module.css'
import { filterByDate, searchByName } from '../../redux/actions';
import '../../App.css'
function Navbar() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('')
    const handleInput = (e) => {
        
        
        setInput(e.target.value)
        
    }
    const handleSearch = (e) =>  {
        
            e.preventDefault();
            dispatch(searchByName(input));
            setInput('')   
    }
    const handleDate = (e) => {
        dispatch(filterByDate(e.target.value));
    }

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        Videogames App
                        <i className="fas fa-code"></i>
                    </NavLink>
                    
                    <form className={s.form} >
                    <input onChange={handleInput}  className={s.input} type="text" placeholder='Search games' spellCheck='false' />
                    <button onClick={handleSearch} className={s.search}>Search</button>
                    </form>
                    <div >
                    <form className={s.form}>
                    <label htmlFor="filterDate" className="nav-logo">
                        <span className={s.span}>filtrar por fecha</span>
                        <input  name='released' onChange={handleDate} className={s.input} type="month"  id="fecha" 
                        required />                       
                    </label>                   
                    </form>
                </div>
                    
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                        
                            <NavLink
                                
                                exact
                                to="/videogames"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                exact
                                to="/create"
                                activeClassName="active"
                                className="nav-links"
                                onClick={handleClick}
                            >
                                Create
                            </NavLink>
                        </li>
                        
                        
                    </ul>
                    {<div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
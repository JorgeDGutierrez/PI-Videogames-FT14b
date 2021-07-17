import React,{ useEffect} from 'react';
import { useSelector } from 'react-redux';
import styles from './Home.module.css';
import Navbar from '../navbar/Navbar';
import Pagination from '../pagination/Pagination.jsx';
import Filters from '../filters/Filters';
import Game from '../game/Game';
import Loading from '../loading/Loading';
import { useState } from 'react';
import axios from 'axios';



function Home(){
    const videogames = useSelector(state => state.videogames);
    const [currentPage, setCurrentPage] = useState(1);
    const [gamesPerPage] = useState(15);

    const indexOfLastGame = currentPage *gamesPerPage; //15
    const indexOfFirtsGame = indexOfLastGame - gamesPerPage; //15 -15
    const currentGames = videogames?.slice(indexOfFirtsGame, indexOfLastGame);

    useEffect(()=>{
        const getGenres = async () => await axios.get('http://localhost:3001/genres');
        getGenres();
    },[])
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return(

        <main className={styles.background}>
            <Navbar/>
            <Filters />
            <div>
                <div>
                    { currentGames ? currentGames.map((ele, idx)=> <Game props={ele} key={idx} />) : <Loading/> }
                </div>
                <Pagination gamesPerPage={gamesPerPage} totalGames={videogames?.length} paginate={paginate}/>
            </div>
        </main>
    )
}
export default Home;
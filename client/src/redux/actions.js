import axios from 'axios';

const SERVER_URL ='http://localhost:3001'
const SERVER_URL_DETAIL = 'http://localhost:3001'




export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export function getVideogames() {
    return async function (dispatch) {
        const response = await axios.get(`${SERVER_URL}/videogames`);
        dispatch({ type: GET_VIDEOGAMES, payload: response.data });
    }
}

export const GET_VIDEOGAME_DETAIL = "GET_VIDEOGAME_DETAIL";
export function getVideogameDetail(id) {
    return async function (dispatch) {
        const response = await axios.get(`${SERVER_URL_DETAIL}/videogame/${id}`);
        dispatch({ type: GET_VIDEOGAME_DETAIL, payload: response.data });
    }
}

export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export function searchByName(name) {
    return async function (dispatch) {
        const response = await axios.get(`${SERVER_URL}/videogames?name=${name}`);
        dispatch({ type: SEARCH_BY_NAME, payload: response.data });
    }
}

export const FILTER_BY_GENRES = "FILTER_BY_GENRES";
export function filterByGenres(genre) {
    return { type: FILTER_BY_GENRES, payload: genre };
}

export const SORT_BY_ALPHABET = "SORT_BY_ALPHABET";
export function sortByAlphabet(payload) {
    return { type: SORT_BY_ALPHABET, payload: payload };
}

export const SORT_BY_RATING = "SORT_BY_RATING";
export function sortByRating(payload) {
    return { type: SORT_BY_RATING, payload: payload };
}

export const FILTER_BY_DB = "FILTER_BY_DB";
 export function filterDB(name) {
    return async (dispatch) => {
        /* await axios
            .get(`${SERVER_URL}/videogames?name=${name}`)
            .then((res) => res.data)
            .then((payload) => {
                dispatch({ type: FILTER_BY_DB, payload: payload });
            }); */
           
            let response = await axios.get(`${SERVER_URL}/videogames?name=${name}`)
            console.log(response.data)
            
            return dispatch({ type: FILTER_BY_DB, payload: response.data });
            
        }

};
export const FILTER_BY_DATE = "FILTER_BY_DATE";
export function filterByDate(payload){
    return { type: FILTER_BY_DATE, payload: payload };
}










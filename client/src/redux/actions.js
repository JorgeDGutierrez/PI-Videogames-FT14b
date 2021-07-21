import axios from 'axios';



export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export function getVideogames() {
    return async function (dispatch) {
        const response = await axios.get('http://localhost:3001/videogames');
        dispatch({ type: GET_VIDEOGAMES, payload: response.data });
    }
}

export const GET_VIDEOGAME_DETAIL = "GET_VIDEOGAME_DETAIL";
export function getVideogameDetail(id) {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/videogame/${id}`);
        dispatch({ type: GET_VIDEOGAME_DETAIL, payload: response.data });
    }
}

export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export function searchByName(name) {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/videogames?name=${name}`);
        dispatch({ type: SEARCH_BY_NAME, payload: response.data });
    }
}

export const FILTER_BY_NAME = "FILTER_BY_NAME";
export function filterByName(input) {
    return { type: FILTER_BY_NAME, payload: input };
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
    
    


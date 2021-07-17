import { FILTER_BY_GENRES, FILTER_BY_NAME, GET_VIDEOGAMES, GET_VIDEOGAMES_DETAIL, SEARCH_BY_NAME, SORT_BY_ALPHABET, SORT_BY_RATING } from '../redux/actions'



const initalState = {
    videogames: undefined,
    copyVideogames: undefined,
    videogameDetail: undefined
}

function rootReducer(state= initalState, action){

    switch( action.type ) {
        case GET_VIDEOGAMES: 
        return{
            ...state,
            videogames: action.payload,
            copyVideogames: action.payload
        }
        case SEARCH_BY_NAME: 
            return {
                ...state,
                videogames: action.payload,
                copyVigames: action.payload
            }
        case GET_VIDEOGAMES_DETAIL: 
            return {
            ...state,
            videogameDetail: action.payload
            }    
        case FILTER_BY_NAME:
            return {
            ...state,
            videogames: state.copyVideogames.filter(ele=>ele.name.toLowerCase().includes(action.payload.name.toLowerCase())),
            
        }     
        case FILTER_BY_GENRES: 
        if(!action.payload) return {...state, videogames: state.copyVideogames}
        return { ...state, videogames: state.copyVideogames.filter(ele=>ele.genres.includes(action.payload))
        
        }
        case SORT_BY_ALPHABET: {
            if(!action.payload) return {...state,videogames: [...state.videogames].sort((a,b)=>a.added<b.added ? 1 : -1)}
            if(action.payload ==='az') return {...state,videogames: [...state.videogames].sort((a,b)=>a.name > b.name ? 1 : -1)}
            return { ...state,videogames:[...state.videogames].sort((a,b)=>a.name > b.name ? -1 :1)}
        }
        case SORT_BY_RATING: {
            if (!action.payload) return { ...state, videogames: [...state.videogames].sort((a, b) => a.added < b.added ? 1 : -1) }  
            if (action.payload === 'high') return { ...state, videogames: [...state.videogames].sort((a, b) => a.rating > b.rating ? -1 : 1) }
            return { ...state, videogames: [...state.videogames].sort((a, b) => a.rating > b.rating ? 1 : -1) }
        }
        default: return state
    }
}

export default rootReducer;
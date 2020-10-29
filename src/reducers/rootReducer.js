
const initState = {
    appleToken: [],
    spotifyToken: [],
    id: [],
    idA2S: [],
    source:[]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'ADD_APPLETOKEN'){
        return{
            ...state,
            appleToken: action.payload
        }
    }
    if (action.type === 'ADD_SPOTIFYTOKEN'){
        return{
            ...state,
            spotifyToken: action.payload
        }
    }
    if (action.type === 'ADD_ID'){
        return{
            ...state,
            id: action.payload
        }
    }
    if (action.type === 'ADD_IDA2S'){
        return{
            ...state,
            idA2S: action.payload
        }
    }
    if (action.type === 'ADD_SOURCE'){
        return{
            ...state,
            source: action.payload
        }
    }
    
    return state;
}



export default rootReducer;
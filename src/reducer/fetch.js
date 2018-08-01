const initialState={
    data: []
}

export default function(state = initialState, actions){
    switch(actions.type){
        case 'FETCH':
            return {
                ...state
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                data: actions.data
            }
        case 'FAILED_DATA':
            return {
                ...state
            }
        default:
            return state; 
    }
}
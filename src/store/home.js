// Reducer for main page

export default function(state = {}, action) {
    switch(action.type) {
        case 'SET_BUSY': 

            return {
              ...state,
              busy : action.data.busy
            }
        
        default: 
            return state
    }
}
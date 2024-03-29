
import {CHANGE_SEARCH_FIELD, } from './constants.js'

const initialState = {
    // robots: [],
    searchField: '',
    // isPending: false,
    // error: null
}

export const searchRobots = (state=initialState, action={}) => {
    // console.log(action.type)
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchField: action.payload};
        default:
            return state
    }
}

// export const requestRobots = (state=initialState, action={}) => {
//     switch(action.type){
//         case REQUEST_ROBOTS_PENDING:
//             return {...state, isPending:true}
//         case REQUEST_ROBOTS_SUCCESS:
//             return { ...state, robots: action.payload, isPending: false}
//         case REQUEST_ROBOTS_FAILED: 
//             return {...state, error:action.payload, isPending: false}
//         default:
//             return state
//     }
// }
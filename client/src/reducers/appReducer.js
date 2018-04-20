import ActionTypes from '../constants/ActionTypes'
import { updateObject, createReducer } from './reducerUtils'

const initialState = {
    hotelsList: [],
    searchResults:[],
    currentHotel: {},
    editCurrentHotel: {}
}


const getHotelsList = (state, action) => {
    console.log(action)
    return updateObject(state, {hotelsList: action.code.data})
}

const getSearchResults = (state, action) => {
    let code = action.code
    if(!code.length) { code = [code]}
    return updateObject(state, {searchResults: code})
}

const setCurrentHotel = (state, action) => {
    console.log(action.code)
    return updateObject(state, {currentHotel: action.code})
}

const editAdminHotel = (state, action) => {
    console.log(action.code)
    console.log(state.hotelsList)
    let hotel = action.code
    let {hotelsList} = state
    let hotelFound;
    for(let i=0; i<hotelsList.length; i++){
        let each = hotelsList[i]
        if(Object.values(each).indexOf(hotel) > -1){
            hotelFound = each
        }
    }

    return updateObject(state, {editCurrentHotel: hotelFound})
}

export default createReducer(initialState, {
    [ActionTypes.GET_HOTELS_LIST]: getHotelsList,
    [ActionTypes.GET_SEARCH_RESULTS]: getSearchResults,
    [ActionTypes.SET_CURRENT_HOTEL]: setCurrentHotel,
    [ActionTypes.SET_ADMIN_CURRENT_HOTEL]: editAdminHotel


})

import ActionTypes from '../constants/ActionTypes'
import { updateObject, createReducer } from './reducerUtils'

const initialState = {
    hotelsList: [],
    searchResults:[],
    currentHotel: {}
}


const getHotelsList = (state, action) => {
    console.log(action)
    return updateObject(state, {hotelsList: action.code.data})
}

const getSearchResults = (state, action) => {
    console.log(action.code)
    return updateObject(state, {searchResults: action.code})
}

const setCurrentHotel = (state, action) => {
    console.log(action.code)
    return updateObject(state, {currentHotel: action.code})
}

export default createReducer(initialState, {
    [ActionTypes.GET_HOTELS_LIST]: getHotelsList,
    [ActionTypes.GET_SEARCH_RESULTS]: getSearchResults,
    [ActionTypes.SET_CURRENT_HOTEL]: setCurrentHotel

})

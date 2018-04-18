import ActionTypes from '../constants/ActionTypes'
import { updateObject, createReducer } from './reducerUtils'

const initialState = {
    hotelsList: [],
    currentAccountDetail: {
        id: "",
        account: "",
        role: ""
    }
    
}

// const getHotelsList = (state, action) => {
//     console.log(action)
//     return updateObject(state, {accountsList: action.code})
// }


    
// export default createReducer(initialState, {
//     [ActionTypes.GET_HOTELS_LIST]: getHotelsList,    
// });
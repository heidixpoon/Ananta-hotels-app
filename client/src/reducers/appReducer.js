import ActionTypes from '../constants/ActionTypes'
import { updateObject, createReducer } from './reducerUtils'

const initialState = {
    hotelsList: []
}

const helloWorld = (state, action) => updateObject(state, {
    helloWorld: 'Wow! New World' 
})

const sayHi = (state, action) => updateObject(state, {
    helloWorld: 'Hi' 
})

const getHotelsList = (state, action) => {
    console.log(action)
    return updateObject(state, {hotelsList: action.code.data})
}

export default createReducer(initialState, {
    [ActionTypes.HELLO_WORLD]: helloWorld,
    [ActionTypes.SAY_HI]: sayHi,
    [ActionTypes.GET_HOTELS_LIST]: getHotelsList

})

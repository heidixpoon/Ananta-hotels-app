import ActionTypes from '../constants/ActionTypes'
import { push } from 'react-router-redux'
import axios from 'axios'

const helloWorld = () => ({ type: ActionTypes.HELLO_WORLD })


const sayHi = () => (dispatch, getState) => {

  console.log('in actions')
  const state = getState();
  console.log('state',state)

  // dispatch(push(`/accountsList`));

  
  // dispatch({type: ActionTypes.HELLO_WORLD})
  // return fetch('http://localhost:13332/signIn', {method: 'get'})
  //   .then (
  //     res=> {
  //       console.log(res)
  //       return dispatch({type: ActionTypes.SAY_HI})
  //     }
  //   )

}

const getAllHotels = () => (dispatch, getState) => {

  console.log('in actions')
  const state = getState();
  console.log('state',state)

  axios.get('/hotels')
  .then((response) => {
    console.log(response)
    dispatch({
      type: ActionTypes.GET_HOTELS_LIST,
      code: response
    }) 
  })
  .catch((err) => {
    console.log(err);
  })

}


const deleteHotel = (hotelName) => (dispatch, getState) => {
  return axios.delete('/hotels', {
    params: {
      hotel: hotelName
    }
  })
    .then(() => {
      console.log('deleted')
      return true
    })
    .catch((err) => {
      console.log('err')
    })
}

module.exports = {
  helloWorld,
  sayHi,
  getAllHotels,
  deleteHotel
} 

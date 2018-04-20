import ActionTypes from '../constants/ActionTypes'
import { push } from 'react-router-redux'
import axios from 'axios'


const getAllHotels = () => (dispatch, getState) => {

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

const createHotel = (dataObj) => (dispatch, getState) => {
  console.log(dataObj)

  axios.post('/hotels', {
      data: dataObj
    })
    .then(()=> {
      dispatch(push(`/adminList`));
    })
    .catch((err) => {
      console.log(err);
    })


}

const editHotel = (item) => (dispatch,getState) => {

  axios.put('/hotels', {
    params: item
  })
    .then((res) => {
      console.log(res)
      // dispatch({
      //   type: ActionTypes.GET_SEARCH_RESULTS,
      //   code: res.data
      // }) 
      dispatch(push(`/adminList`));
    })
    .catch((err) => {
      console.log('err in view')
    })

}


module.exports = {
  getAllHotels,
  createHotel,
  editHotel
} 

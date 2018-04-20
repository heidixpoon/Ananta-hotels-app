import ActionTypes from '../constants/ActionTypes'
import { push } from 'react-router-redux'
import axios from 'axios'


const getAllHotels = () => (dispatch, getState) => {

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

const getSettingSeach = (setting) => (dispatch,getState) => {
  axios.get('/settingSearch', {
    params:{
      data: setting
    }
  })
    .then((res) => {
      console.log(res)
      dispatch({
        type: ActionTypes.GET_SEARCH_RESULTS,
        code: res.data
      }) 
      dispatch(push(`/searchResults`));
    })
    .catch((err) => {
      console.log('err', err);
    })
}

const getExperienceSearch = (experience) => (dispatch,getState) => {
  axios.get('/experienceSearch', {
    params:{
      data: experience
    }
  })
    .then((res) => {
      console.log(res)
      dispatch({
        type: ActionTypes.GET_SEARCH_RESULTS,
        code: res.data
      }) 
      dispatch(push(`/searchResults`));
    })
    .catch((err) => {
      console.log('err');
    })
}

const setCurrentHotel = (item) => (dispatch,getState) => {
  dispatch({
    type: ActionTypes.SET_CURRENT_HOTEL,
    code: item
  })

  dispatch(push(`/hotelInfo`));

}

const getMainSearchResults = (item) => (dispatch,getState) => {

  axios.get('/mainSearch', {
    params:{
      data: item
    }
  })
    .then((res) => {
      console.log(res)
      dispatch({
        type: ActionTypes.GET_SEARCH_RESULTS,
        code: res.data
      }) 
      dispatch(push(`/searchResults`));
    })
    .catch((err) => {
      console.log('err in view')
    })
}

const setAdminCurrentHotel = (item) => (dispatch,getState) => {
  dispatch({
    type: ActionTypes.SET_ADMIN_CURRENT_HOTEL,
    code: item
  })

  dispatch(push(`/editHotel`));

}


module.exports = {
  getAllHotels,
  deleteHotel,
  getSettingSeach,
  getExperienceSearch,
  setCurrentHotel,
  getMainSearchResults,
  setAdminCurrentHotel
} 

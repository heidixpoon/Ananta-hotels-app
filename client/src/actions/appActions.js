import ActionTypes from '../constants/ActionTypes'
import { push } from 'react-router-redux'

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

module.exports = {
  helloWorld,
  sayHi
} 

import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import {BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

// import reducers from './reducers' // Or wherever you keep your reducers
import appReducer from './reducers/appReducer.js'

import thunk from 'redux-thunk'


import Home from './containers/Home.jsx'
import SearchResults from './containers/SearchResultsPage.jsx'
import AdminList from './containers/AdminListPage.jsx'
import AdminCreateHotel from './containers/AdminCreatePage.jsx'
import HotelInfo from './containers/HotelInfoPage.jsx'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles/main.css'

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating


const reducers = combineReducers({
  appReducer,
  router: routerReducer
})

const store = createStore(
  reducers,
  applyMiddleware(thunk, middleware)
)

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
  <MuiThemeProvider>
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/searchResults" component={SearchResults}/>
        <Route exact path="/hotelInfo" component={HotelInfo}/>
        <Route exact path="/adminList" component={AdminList}/>
        <Route exact path="/createHotel" component={AdminCreateHotel}/>



      </div>
    </ConnectedRouter>
  </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
)


// import { BrowserRouter } from 'react-router-dom';
// import React from 'react';
// import ReactDOM from 'react-dom';
// // import App from './components/App.jsx';


// ReactDOM.render((
//   <BrowserRouter>
//       <div>hi</div>
//   </BrowserRouter>
// ), document.getElementById('app'))
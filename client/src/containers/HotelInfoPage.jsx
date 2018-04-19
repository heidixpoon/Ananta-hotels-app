import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/appActions.js';



class HotelInfo extends React.Component {
    constructor(props){
        super(props) 

    }

  
    render() {  
        console.log('=======',this.props.appState)
        let {currentHotel} = this.props.appState
        console.log('====++===',currentHotel)


        return (
            <main>
              <h1>This Hotel Info</h1>
              <h3>Hotel Name: {currentHotel.name}</h3>
              <h5>City: {currentHotel.city}</h5>

                
            </main>
        )
    }
}

export default connect(
    state => ({
        appState: state.appReducer,
    }),
    dispatch => ({
        actions: bindActionCreators( appActions , dispatch)
    })
)(HotelInfo);


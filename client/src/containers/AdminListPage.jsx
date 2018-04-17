import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/appActions.js';


class AdminList extends React.Component {
    constructor(props){
        super(props)   
    }


    render() {  
        return (
            <main>
              <h1>This is Admin List</h1>
                
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
)(AdminList);



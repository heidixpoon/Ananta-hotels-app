import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/appActions.js';



class SearchResults extends React.Component {
    constructor(props){
        super(props) 

        
    }

    componentDidMount(){
      console.log(this.props.actions)
      this.props.actions.sayHi();
    }


    render() {  
        return (
            <main>
              <h1>This Search Results</h1>
                
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
)(SearchResults);


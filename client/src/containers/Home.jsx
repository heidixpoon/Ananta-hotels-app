import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/appActions.js';



class Home extends React.Component {
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
              <h1>This is home</h1>
                
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
)(Home);



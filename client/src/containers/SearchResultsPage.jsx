import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/appActions.js';



class SearchResults extends React.Component {
    constructor(props){
        super(props) 

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(item){
        this.props.actions.setCurrentHotel(item)
    }




    render() {  
        console.log('=======',this.props.appState)
        let {searchResults} = this.props.appState

        return (
            <main>
              <h1>This Search Results</h1>
              {
                  searchResults.map((item, i) => {
                        return (
                            <div key={i} onClick={()=> {this.handleClick(item)} }>
                                <h3>{item.name}</h3>
                            </div>
                    )
                  })
              }
                
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


import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/appActions.js';



class Home extends React.Component {
    constructor(props){
        super(props) 
        this.state ={ 
            settings: ['Sea', 'Rainforest', 'Beach', 'Mountains', 'Urban', 'Suburban'],
            experiences: ['Eco-Friendly', 'Adventure', 'Wellness', 'Indulgence']
        }

        
    }

    componentDidMount(){
      this.props.actions.getAllHotels()
    }


    render() {  
        console.log('state is this', this.props.appState)
        let {settings} = this.state
        let {experiences} = this.state


        return (
            <main>
                <h1>This is home</h1>

                <div className="settings-container">
                    {
                        settings.map((item, i) => {
                            return (
                                <h5 key={i}>{item}</h5>
                            )
                        })
                    }
            
                </div>

                <br/>


                <div className="">
                    {
                        experiences.map((item, i) => {
                            return(
                                <h5 key={i}>{item}</h5>
                            )
                        })
                    }
            
                </div>
                
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



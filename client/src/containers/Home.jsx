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

        this.handClickExperience = this.handClickExperience.bind(this)
        this.handleClickSetting = this.handleClickSetting.bind(this)

        
    }

    componentDidMount(){
        this.props.actions.getAllHotels()
    }

    handleClickSetting(settingName){
        console.log('clicked', settingName)
        this.props.actions.getSettingSeach(settingName)
    }

    handClickExperience(experienceName){
        this.props.actions.getExperienceSearch(experienceName)
    }


    render() {  
        console.log('state is this', this.props.appState)
        let {settings} = this.state
        let {experiences} = this.state


        return (
            <main>
                <h1>The Ananta List</h1>
                <div className="c-outer">
                    <div className="c-video">
                        <div className="c-videoHome">
                            <iframe className="c-videoHome__iframe" frameBorder="0" height="250%" width="100%" 
                                src="https://www.youtube.com/embed/tNr8lDKzAxg?autoplay=1&controls=0&showinfo=0&autohide=1&mute=1&loop=1"
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>


                <div className="c-settings">
                    {
                        settings.map((item, i) => {
                            return (
                                <div className="c-settings__each" key={i} onClick={() => {this.handleClickSetting(item)} }>
                                    <h5>{item}</h5>
                                </div>
                            )
                        })
                    }
            
                </div>

                <br/>


                <div className="c-experiences">
                    {
                        experiences.map((item, i) => {
                            return(
                                <div className="c-experiences__each" key={i} onClick={() => {this.handClickExperience(item)} }>
                                    <h5>{item}</h5>
                                </div>
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



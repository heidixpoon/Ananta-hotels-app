import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/appActions.js';



class HotelInfo extends React.Component {
    constructor(props){
        super(props) 
        this.redirectHome = this.redirectHome.bind(this)

    }

    redirectHome(){
      this.props.history.push('/');
    }
  
    render() {  
        console.log('=======',this.props.appState)
        let {currentHotel} = this.props.appState
        console.log('====++===',currentHotel)


        return (
            <main>
                <div className="c-home-nav">
                  <h1 className="c-nav-header" onClick={this.redirectHome}>The Ananta Collection</h1>
                </div>

                <div className="c-hotelInfo-hero">
                    <section className="c-hotelInfo-hero__imgWrapper">
                        <article className="c-hotelInfo-hero__article">
                            <div className="c-hotelInfo-hero__div">
                                <img src={currentHotel.mainImg} className="c-hotelInfo-hero__size" alt="" />
                            </div>
                        </article>
                    </section>
                </div>


                <div className="c-hotelInfo-main">
                  <div className="c-hotelInfo-main__top">
                    <h3>{currentHotel.name}</h3>
                    <h5>{currentHotel.city}, {currentHotel.country}</h5>
                  </div>
                  <p>{currentHotel.mainDesc}</p>


                </div>


                <div className="c-hotelInfo-middle">
                  <div className="c-hotelInfo-charRight">
                    <div className="c-hotelInfo-charRight__left">
                        <img className="c-hotelInfo-charRight__left-img" src={currentHotel.firstImg} alt="" />
                    </div>
                    <div className="c-hotelInfo-charRight__right">
                      <h3>{currentHotel.firstTopic}</h3>
                      <p>{currentHotel.firstDesc}</p>
                    </div>
                  </div>

                  <div className="c-hotelInfo-charLeft">
                    <div className="c-hotelInfo-charLeft__left">
                      <div className="c-hotelInfo-charLeft__left-content">
                        <h3>{currentHotel.secondTopic}</h3>
                        <p>{currentHotel.secondDesc}</p>
                      </div>
                    </div>
                    <div className="c-hotelInfo-charLeft__right">
                        <img className="c-hotelInfo-charLeft__right-img" src={currentHotel.secondImg} alt="" />
                    </div>
                  </div>

                  <div className="c-hotelInfo-charRight">
                    <div className="c-hotelInfo-charRight__left">
                        <img className="c-hotelInfo-charRight__left-img" src={currentHotel.thirdImg} alt="" />
                    </div>
                    <div className="c-hotelInfo-charRight__right">
                      <h3>{currentHotel.thirdTopic}</h3>
                      <p>{currentHotel.thirdDesc}</p>
                    </div>
                  </div>
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
)(HotelInfo);


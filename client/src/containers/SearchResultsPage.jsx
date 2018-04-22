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
                <div className="c-home-nav">
                    <h1>The Ananta Collection</h1>
                </div>

                <br/>

                <div className="c-search-hero">
                    <div className="c-search__header">
                        <h3 className="c-search__header-title">Search Results</h3>
                    </div>
                    <section className="c-search-hero__imgWrapper">
                        <article className="c-search-hero__article">
                            <div className="c-search-hero__div">
                                <img className="c-search-hero__size" alt="" />
                            </div>
                        </article>
                    </section>
                </div>


              {
                  searchResults.map((item, i) => {
                        return (
                            <div className="c-search-eachResult" key={i}>
                                <div className="c-search-eachResult__left">
                                    <img src={item.mainImg} alt="" />
                                </div>
                                <div className="c-search-eachResult__right">
                                    <h3>{item.name}</h3>
                                    <h3>{item.city}, {item.country}</h3>
                                    <button onClick={()=> {this.handleClick(item)} }>View Hotel</button>
                                </div>
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


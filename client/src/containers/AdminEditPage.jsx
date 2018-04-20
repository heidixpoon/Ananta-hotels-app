import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/appActions.js';
import * as adminActions from '../actions/adminActions.js';
import axios from 'axios'


class AdminEditHotel extends React.Component {
    constructor(props){
        super(props)  
        this.handleSubmit = this.handleSubmit.bind(this) 
    }

    handleSubmit(){
      let hotel = this.props.appState.editCurrentHotel

      let dataObj = {
        '_id': hotel._id,
        'name': this.name.value,
        'website': this.website.value,
        'city': this.city.value,
        'country': this.country.value,
        'mainImg': this.mainImg.value,
        'endImg': this.endImg.value,
        'setting': this.setting.value,
        'experience': this.experience.value,
        'mainDes': this.mainDes.value,
        'firTopic': this.firTopic.value,
        'firImg': this.firImg.value,
        'firDes': this.firDes.value,
        'secTopic': this.secTopic.value,
        'secImg': this.secImg.value,
        'secDes': this.secDes.value,
        'thirdTopic': this.thirdTopic.value,
        'thirdImg': this.thirdImg.value,
        'thirdDes': this.thirdDes.value
      }

      this.props.adminActions.editHotel(dataObj)

    
    }


    render() {  
      let hotel = this.props.appState.editCurrentHotel
      console.log('state in edit', hotel)
      let name = hotel.name

        return (
            <main>
              <h1>Edit Hotel Info: {hotel.name} </h1>
              <input type="text" placeholder="Name" defaultValue={hotel.name} ref={name => this.name = name} />
              <br />
              <input type="text" placeholder="Hotel Website" defaultValue={hotel.hotelUrl} ref={website => this.website = website}/>
              <br />
              <input type="text" placeholder="City/Town" defaultValue={hotel.city} ref={city => this.city = city}/>
              <br />
              <input type="text" placeholder="Country" defaultValue={hotel.country} ref={country => this.country = country}/>
              <br />
              <input type="text" placeholder="Main Photo URL" defaultValue={hotel.mainImg} ref={mainImg => this.mainImg = mainImg}/>
              <br />
              <input type="text" placeholder="Ending Photo URL" defaultValue={hotel.endImg} ref={endImg => this.endImg = endImg}/>
              <br />
              <select defaultValue={hotel.setting} ref={setting => this.setting = setting} >
                <option value="">Choose a Setting..</option>
                <option value="Sea">Sea</option>
                <option value="Rainforest">Rainforest</option>
                <option value="Mountains">Mountains</option>
                <option value="Beach">Beach</option>
                <option value="Urban">Urban</option>
                <option value="Architectural">Architectural</option>
              </select>
              <br />

              <br />

              <select defaultValue={hotel.experience} ref={experience => this.experience = experience} >
                <option value="">Choose an Experience..</option>
                <option value="Adventure">Adventure</option>
                <option value="Wellness">Wellness</option>
                <option value="Eco-Friendly">Eco-Friendly</option>
                <option value="Indulgence">Indulgence</option>
              </select> 

              <br />
              <textarea type="text" placeholder="Main Description" defaultValue={hotel.mainDesc} ref={mainDes => this.mainDes = mainDes}/>
              <br />
              <h5>#1 Attraction</h5>
              <input type="text" placeholder="Topic" defaultValue={hotel.firstTopic} ref={firTopic => this.firTopic = firTopic}/>
              <br />
              <input type="text" placeholder="Image URL" defaultValue={hotel.firstImg} ref={firImg => this.firImg = firImg}/>
              <br />
              <textarea type="text" placeholder="Description" defaultValue={hotel.firstDesc} ref={firDes => this.firDes = firDes}/>
              <h5>#2 Attraction</h5>
              <input type="text" placeholder="Topic" defaultValue={hotel.secondTopic} ref={secTopic => this.secTopic = secTopic}/>
              <br />
              <input type="text" placeholder="Image URL" defaultValue={hotel.secondImg} ref={secImg => this.secImg = secImg}/>
              <br />
              <textarea type="text" placeholder="Description" defaultValue={hotel.secondDesc} ref={secDes => this.secDes = secDes}/>
              <h5>#3 Attraction</h5>
              <input type="text" placeholder="Topic" defaultValue={hotel.thirdTopic} ref={thirdTopic => this.thirdTopic = thirdTopic}/>
              <br />
              <input type="text" placeholder="Image URL" defaultValue={hotel.thirdImg} ref={thirdImg => this.thirdImg = thirdImg}/>
              <br />
              <textarea type="text" placeholder="Description" defaultValue={hotel.thirdDesc} ref={thirdDes => this.thirdDes = thirdDes}/>

              <br /><br />
              <button onClick={this.handleSubmit}>Submit</button>

            </main>
        )
    }
}

export default connect(
    state => ({
        appState: state.appReducer,
    }),
    dispatch => ({
        appActions: bindActionCreators( appActions , dispatch),
        adminActions: bindActionCreators( adminActions , dispatch),
    })
)(AdminEditHotel);
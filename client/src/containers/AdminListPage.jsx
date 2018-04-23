import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/appActions.js';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import HotelEachRow from '../components/HotelEachRow.jsx'

class AdminList extends React.Component {
    constructor(props){
      super(props)   
      this.handleClick = this.handleClick.bind(this)
      this.handleDelete = this.handleDelete.bind(this)
      this.handleEdit = this.handleEdit.bind(this)
      this.redirectHome = this.redirectHome.bind(this)
    }

    componentDidMount(){
      this.props.actions.getAllHotels()
    }

    handleClick(){
      this.props.history.push('/createHotel')

    }

    handleEdit(hotelName){
      this.props.actions.setAdminCurrentHotel(hotelName)

    }

    handleDelete(hotelName){
      new Promise((resolve, reject) => {
        if(this.props.actions.deleteHotel(hotelName)){
          console.log('deleted in view!')
          this.props.actions.getAllHotels()
          resolve()
        } else {
          reject(new Error('failed'))
        }
      })

    }

    redirectHome(){
      this.props.history.push('/');
    }


    render() { 
      console.log(this.props.appState) 
      let {hotelsList} = this.props.appState

        return (
            <main>
              <div className="c-admin-header">
                <h1>The Ananta Collection: Admin</h1>
                <button onClick={this.redirectHome}>Go to Client View</button>
              </div>

              <div className="c-admin-main">
                  <Card>
                  
                  <CardTitle title="Hotels List" subtitle="" />
                  <br/><br/>
                  <FloatingActionButton className="c-admin-createBtn" mini={true} backgroundColor={'#5690AF'}onClick={this.handleClick}>
                    <ContentAdd />
                  </FloatingActionButton>

                  <Table>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                      <TableRow>
                        <TableHeaderColumn></TableHeaderColumn>
                        <TableHeaderColumn>Hotel Name</TableHeaderColumn>
                        <TableHeaderColumn>City/Town</TableHeaderColumn>
                        <TableHeaderColumn>Setting</TableHeaderColumn>
                        <TableHeaderColumn>Experience</TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                        <TableHeaderColumn></TableHeaderColumn>
                      </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                      {
                        hotelsList ? hotelsList.map((item, i) => {
                          return(
                            <HotelEachRow 
                              key={i} 
                              hotel={item} 
                              count={i+1} 
                              handleDelete= {(hotelName)=> { this.handleDelete(hotelName)}}
                              handleEdit = {(hotelName)=> { this.handleEdit(hotelName)}}
                            />
                          )
                        })
                        : ''
                      }
                    </TableBody>
                  </Table>
                  
                </Card>
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
)(AdminList);



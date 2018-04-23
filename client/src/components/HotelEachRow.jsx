import React from 'react';
import {TableRow,TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

const HotelEachRow = ({hotel, count, handleDelete, handleEdit}) => {
  let hotelName = hotel.name

  return (
    <TableRow>
      <TableRowColumn>{count}</TableRowColumn>
      <TableRowColumn>{hotel.name}</TableRowColumn>
      <TableRowColumn>{hotel.city}</TableRowColumn>
      <TableRowColumn>{hotel.setting}</TableRowColumn>
      <TableRowColumn>{hotel.experience}</TableRowColumn>
      <TableRowColumn>
        <FlatButton label="Edit" style={{'color': '#5690AF'}} onClick={()=> handleEdit(hotelName)}/>
      </TableRowColumn>
      <TableRowColumn>
        <FlatButton label="Delete" style={{'color': '#CD757E'}} onClick={()=> handleDelete(hotelName)}/>
      </TableRowColumn>
    </TableRow>
  );

};


export default HotelEachRow;
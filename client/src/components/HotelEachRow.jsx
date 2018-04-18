import React from 'react';
import {TableRow,TableRowColumn} from 'material-ui/Table';

const HotelEachRow = ({hotel, count}) => {


  return (
    <TableRow>
      <TableRowColumn>{count}</TableRowColumn>
      <TableRowColumn>{hotel.name}</TableRowColumn>
      <TableRowColumn>{hotel.city}</TableRowColumn>
      <TableRowColumn>{hotel.setting}</TableRowColumn>
      <TableRowColumn>{hotel.experience}</TableRowColumn>
      <TableRowColumn>Delete</TableRowColumn>
      <TableRowColumn>Edit</TableRowColumn>
    </TableRow>
  );

};


export default HotelEachRow;
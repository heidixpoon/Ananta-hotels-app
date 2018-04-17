const mongoose = require('mongoose');
const hotelObj = require('./schemas.js').hotelObj;

mongoose.Promise = Promise;
// mongoose.connect('mongodb://localhost/eventsApp');
mongoose.connect(process.env.MLAB || 'mongodb://localhost/AnantaHotelsApp')


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connected!')
});


let hotelSchema = mongoose.Schema(hotelObj);

let Hotel = mongoose.model('Hotel', hotelSchema);



module.exports = {
  
}


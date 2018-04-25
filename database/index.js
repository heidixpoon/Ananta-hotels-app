const mongoose = require('mongoose');
const hotelObj = require('./schemas.js').hotelObj;

mongoose.Promise = Promise;
mongoose.connect(process.env.MLAB || 'mongodb://localhost/AnantaHotelsApp')


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connected!')
});


let hotelSchema = mongoose.Schema(hotelObj);

let Hotel = mongoose.model('Hotel', hotelSchema);


let createHotel = (data) => {
 
  let eachHotel = {
    name: data.name,
    hotelUrl: data.website,
    city: data.city,
    country: data.country,
    mainImg: data.mainImg,
    endImg: data.endImg,
    setting: data.setting,
    experience: data.experience,
    mainDesc: data.mainDes,
    firstTopic: data.firTopic,
    firstDesc: data.firDes,
    firstImg: data.firImg,
    secondTopic: data.secTopic,
    secondDesc: data.secDes,
    secondImg: data.secImg,
    thirdTopic: data.thirdTopic,
    thirdDesc: data.thirdDes,
    thirdImg: data.thirdImg,
  };
 
  return Hotel.create(eachHotel).catch((err) => {console.log('failed save', err)})
 
}


let getAllHotels = () => {
  return Hotel.find({}).exec();
}

let updateHotel = (data) => {
  return Hotel.update({_id: data._id}, { $set: data }).exec();
}

let deleteHotel = (hotelName) => {
  return Hotel.find({ name: hotelName }).remove().exec();
}

let getSettingSearch = (settingName) => {
  return Hotel.find({ setting: settingName }).exec();
} 

let getExperienceSearch = (experienceName) => {
  return Hotel.find({ experience: experienceName }).exec();
} 

let getSearchByName = (item) => {
  return Hotel.findOne({ name: item }).exec();
} 

let getSearchByCity = (item) => {
  return Hotel.find({ city: item }).exec();
} 

let getSearchByCountry = (item) => {
  return Hotel.find({ country: item }).exec();
} 

module.exports = {
  createHotel,
  getAllHotels,
  updateHotel,
  deleteHotel,
  getSettingSearch,
  getExperienceSearch,
  getSearchByName,
  getSearchByCity,
  getSearchByCountry
}


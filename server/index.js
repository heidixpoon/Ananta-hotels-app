const express = require('express');
const parser = require('body-parser');
const axios = require('axios');
const bcrypt = require('bcrypt');
const path = require('path');

const config = require ('../config.js');
const db = require('../database/index.js')

let app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

// Express sessions
var session = require('express-session')({
  secret: 'fat cat',
})
app.use(session)

var restrict = (req, res, next) => {
  console.log('restricting request');
  console.log('session: ', req.session);
  if ((req.session !== undefined) && (req.session.user !== undefined)) {
      console.log('authenticated user ', req.session.user)
      next()
  } else {
      console.log('Errror, auth failed, redirecting to /')
      res.redirect('/')
  }
}

// app.get('/isloggedin', (req, res) => {
//   res.send(!!req.session && !!req.session.user);
// })

app.get('/hotels', (req,res) => {
  db.getAllHotels()
    .then((response) => {
      // console.log(response)
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log(err)
    })
})

app.post('/hotels', (req, res) => {
  // console.log(req.body.data);
  db.createHotel(req.body.data)
    .then((response) => {
      console.log(response)
      res.status(200).send()
    })
    .catch((err) => {
      console.log(err);
    })
})

app.put('/hotels', (req,res) => {
  // console.log(req.body.params)
  db.updateHotel(req.body.params)
    .then(() => {
      console.log('success')
      res.status(200).send();
    })
    .catch((err) => {
      
    })
})


app.delete('/hotels', (req, res) => {
  console.log(req.query.hotel)
  db.deleteHotel(req.query.hotel)
    .then(()=> {
      console.log('success')
      res.status(200).send()
    })
    .catch((err) => {
      console.log('err');
    })
})


app.get('/settingSearch', (req,res) => {
  console.log(req.query.data)
  db.getSettingSearch(req.query.data)
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((err) => {
      console.log(err)
    })

})

app.get('/experienceSearch', (req,res) => {
  console.log(req.query.data)
  db.getExperienceSearch(req.query.data)
    .then((response) => {
      // console.log('something!', response)
      res.status(200).send(response)
    })
    .catch((err) => {
      console.log('hi', err)
    })

})


app.get('/mainSearch', (req,res) => {
  console.log(req.query.data)
  db.getSearchByName(req.query.data)
    .then((response) => {
      console.log(response, 'here');
      if(response !== null) {
        res.status(200).send(response)
      }
    })
    .then(() => {
      db.getSearchByCity(req.query.data)
      .then((response) => {
        if(response !== []) {
          res.status(200).send(response);
        } else {
          throw ('ERROR!!')
        }
      })
      .catch((err) => {
        console.log(err)
        // res.status(404).send();
      })

    })
 
})



app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
})


let port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const user = require('./user');
const middleware = require('./controllers/middleware');
const mainCtrl = require('./controllers/mainCtrl');
const app = express();

app.use(bodyParser.json());

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getOccupationsLatest);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);
app.get('/family', mainCtrl.getFamily);
app.get('/family/:gender', mainCtrl.getFamilyGender);
app.get('/restaurants', mainCtrl.getRestaurants);
app.get('/restaurants/:name', mainCtrl.getRestaurantsName)

app.listen(3000, function() {
    console.log('Listening on 3000 yo');
})
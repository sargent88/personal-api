const user = require('../user.js')

module.exports = {
    getName: function(req, res) {
        res.status(200).send(user.name)
    },
    getLocation: function(req, res) {
        res.status(200).send(user.location)
    },
    getOccupations: function(req, res) {
        res.status(200).send(user.occupations)
    },
    getOccupationsLatest: function(req, res) {
        res.status(200).send(user.occupations[user.occupations.length - 1])
    },
    getHobbies: function(req, res) {
        res.status(200).send(user.hobbies)
    },
    getHobbiesType: function(req, res) {
        res.send(user.hobbies.filter(function(e) {
                return e.type;
            })) //[]

    },
    getFamily: function(req, res) {
        res.status(200).send(user.family)
    },
    getFamilyGender: function(req, res) {

    },
    getRestaurants: function(req, res) {
        res.status(200).send(user.restaurants)
    },
    getRestaurantsName: function(req, res) {

    }
}
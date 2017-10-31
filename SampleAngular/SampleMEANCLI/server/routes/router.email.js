const express = require('express');
const router = express.Router();

var Users = require('../../models/model.user')

const bodyParser = require('body-parser');

router.post('/', function(req, res, next){
	console.log(req.body)
	var email = req.body.email;
	var user = new Users({
	firstname:'Andres',
	lastname:'Hernandez',
	password:'testpassword',
	email:email
	});
	user.save();
	res.redirect('/');
});

router.get('/', function(req, res, next){
	Users.find({}, function (err, docs) {
		res.send(docs);
	});


});

module.exports = router;
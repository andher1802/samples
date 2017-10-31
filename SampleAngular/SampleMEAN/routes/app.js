var express = require('express');
var router = express.Router();

var Users = require('../models/models.user')

router.get('/', function (req, res, next) {
	Users.findOne({}, function(err, data){
			if (err) { 
				return res.send('error')
			}
			res.render('message', {email:data.email});
		});
	// res.render('message');
});

router.post('/', function(req, res, next){
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

module.exports = router;
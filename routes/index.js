

var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
console.log("000000000000000000000000000000");
var calc = require('./datainsert');
console.log("111111111111111111111111111111");

router.use(bodyParser.urlencoded({ extended:false}));
router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
     console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
     res.render('index', { title: 'Express',cat: "kbkjf" });
});
router.post('/', function(req, res) {
	//console.log(req.body.username,req.body.phone ,req.body.email ,req.body.password);
     
     var a = calc.insert(req.body.username,req.body.phone ,req.body.email ,req.body.password);
     console.log("returned variable of student  =  "+a);
     console.log("data recived successfully");
      res.render('user', { title: 'Express',username: req.body.username, phone:req.body.phone , email:req.body.email  });

});

/*
router.get('/', function(req, res) {
	res.render('index', { title: 'Express',cat: 'A' });
});
router.get('/users/:id', function(req, res) {
	res.render('index', { title: 'Express',cat: req.params.id +' user id is < = 5'  });
});
*/
module.exports = router;
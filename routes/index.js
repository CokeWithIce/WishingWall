var express = require('express');
var router = express.Router();

const IndexController=require('../controller/index');


router.get('/',IndexController.getList);
router.post('/add',IndexController.add);
/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/


module.exports = router;

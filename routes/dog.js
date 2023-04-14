var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dog', { title: 'Search Results for dog' });
});

module.exports = router;
var express = require('express');
const dog_controlers= require('../controllers/dog');
var router = express.Router();
/* GET costumes */
router.get('/', dog_controlers.dog_view_all_Page );
module.exports = router;
var express = require('express');
var router = express.Router();
const dog_controlers= require('../controllers/dog');
/* GET home page. */
router.get('/', dog_controlers.dog_view_all_Page);
router.get('/detail', dog_controlers.dog_view_one_Page);
/* GET create dog page */
router.get('/create', dog_controlers.dog_create_Page);
router.get('/update', dog_controlers.dog_update_Page);
router.get('/delete', dog_controlers.dog_delete_Page);
module.exports = router;
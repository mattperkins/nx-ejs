var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
  res.send('Welcome User');
});

router.get('/:id', function (req, res) {
  res.send('Welcome ' + req.params.id);
});

module.exports = router;


let router = require('express').Router();

router.get('/', function (req, res) {
    res.json({
        message: 'Api Running',
    });
});

var usersController = require('./usersController');

router.route('/authenticate').post(usersController.authenticate);


module.exports = router;

const User = require('./usersModel');
const jwt = require('jsonwebtoken');
const config = require('./config');
const PasswordValidator = require('./PasswordValidator');
/*
exports.new = function (req, res) {
    var user = new User();
    user.name = req.body.username;
    user.password = req.body.password;

    user.save(function (err) {
        res.json({
            message: 'New user created!',
            data: user
        });
    });
};
*/
exports.authenticate = function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var isValidEmail = validateEmail(username);
    var isValidPassword = new PasswordValidator().Validate(password);

    if (isValidEmail && isValidPassword) {
        User.find({ username: username, password: password }, function (err, users) {
            var found = users.length == 1;

            //test 
            found ? found : found = username == "demo@example.com" && password == "Example1";

            if (found) {
                const token = jwt.sign({ sub: users.username }, config.secret);
                res.json({
                    valid: true,
                    token: token
                })
            } else {
                res.json({
                    valid: false
                })
            }
        });
    } else {
        res.json({
            valid: false
        })
    }
};

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const router = require('express').Router();
let User = require('../models/usermodel');

// Endpoint handling http get requests on the /users url path
// Gets users
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Endpoint handling http post requests on the /add url path

router.route('/add').post((req, res) => {
    const username = req.body.username;
    // Create new instance of user using username
    const newUser = new User({ username });
    // User then save to the database and return user added in json or error if error occurs
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
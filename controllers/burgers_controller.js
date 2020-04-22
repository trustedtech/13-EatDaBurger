const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();

// View all burgers
router.get('/', function(req, res) {
    burger.all(function(burgerData) {
        res.render('index', { burger_data: burgerData });
    });
});

// Post a new burger
router.post('/add', function(req, res) {
    burger.create(req.body.burger_name, function(result) {
        console.log(result);
        res.redirect('/');
    });
});
  
// Update status of existing burger
router.put("/update/:id", function(req, res) {
    burger.update(req.params.id, function(result) {
        console.log(result);
        res.sendStatus(200);
    });
});
  
module.exports = router;
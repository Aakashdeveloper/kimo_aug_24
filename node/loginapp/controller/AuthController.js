let express = require('express');
let router = express.Router()
let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');
let config = require('../config');
let User = require('../model/userModel');

router.use(express.json());

router.get('/users',async(req,res) => {
    let response = await User.find({})
    res.send(response)
})


module.exports = router
const express = require('express')

const index = {};

index.main = (req, res) => {
    res.render('login');


}


module.exports = index;
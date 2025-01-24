const express = require("express");

const router = express.Router();

const contactUsController = require('../controllers/contactus')

router.get('/success',contactUsController.getSuccess)

module.exports = router;
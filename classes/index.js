const express = require('express');
const router = express.Router();

const dbreaderServlet = require('./dbreaderServlet.js');
const fDbreaderServlet = require('./fDbreaderServlet.js');
const fDbwriterServlet = require('./fDbwriterServlet.js');

router.use('/dbreaderServlet', dbreaderServlet);
router.use('/fDbreaderServlet', fDbreaderServlet);
router.use('/fDbwriterServlet', fDbwriterServlet);

module.exports = router;
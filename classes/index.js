const express = require('express');
const router = express.Router();

const dbreaderServlet = require('./dbreaderServlet.js');
const fDbreaderServlet = require('./fDbreaderServlet.js')

router.use('/dbreaderServlet', dbreaderServlet);
router.use('/fDbreaderServlet', fDbreaderServlet);

module.exports = router;
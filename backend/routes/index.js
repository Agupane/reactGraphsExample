// Imports
const express = require('express');
const chartRoutes = require('./chartData');

const router = express.Router();
router.use('/chart', chartRoutes);

module.exports = router;
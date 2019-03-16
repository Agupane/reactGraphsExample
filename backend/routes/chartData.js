const express = require('express');
const chartController = require('../controllers/chartData');

const router = express.Router();
// Current URL: /chart

router
  .route('/')
  .get(chartController.getChartData)
  .put(chartController.updateChartData);

router
  .route('/reset')
  .put(chartController.resetChartData);
module.exports = router;
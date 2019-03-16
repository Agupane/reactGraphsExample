const io = require('../socket');
const chartUpdateEvent = 'ChartUpdate';
const initialData = {
  series: [
    {
      name: "Population infected",
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ]
};

let chartData = initialData;

const getChartData = async (req, res, next) => {
  console.log('returning chart data');
  res.status(200).json(chartData);
};

const resetChartData = async (req, res, next) => {
  console.log('Updating chart with original data set');
  chartData = initialData;
  io.getIO().emit(chartUpdateEvent, {
    action: 'update',
    data: chartData
  });
  res.status(200).json({ message: 'Data restarted', data: chartData });
};

const updateChartData = async (req, res, next) => {
  console.log('Updating chart data with params ', req.body);
  chartData.series = req.body;
  io.getIO().emit(chartUpdateEvent, {
    action: 'update',
    data: chartData
  });
  res.status(200).json({ message: 'Data updated', data: chartData });
};

module.exports = {
  getChartData,
  updateChartData,
  resetChartData,
};
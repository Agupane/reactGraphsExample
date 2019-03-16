const express = require('express');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

// Configures CORS
app.use(cors());

// Configures routes
app.use('/', indexRoutes);



// Error handling **
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message })
});

const server = app.listen(3000, () => {
  console.log('Node up and running in port 3000')
});

// Sets socket io
const io = require('./socket').init(server);

io.on('connection', socket => {
  console.log("Client connected");
});
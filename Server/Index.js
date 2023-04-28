const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
//import routes
const authRoutes = require('./routes/auth');
const getData = require('./routes/data')
const { db } = require('./models/user');
//app
const app = express();
// db
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log('DB Connected'));
//middlewares
app.use(bodyParser.json());
app.use(cors());
//routes middleware
app.use('/api', authRoutes);
app.use('/details',getData);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
});
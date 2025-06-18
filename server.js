const express= require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectdb = require('./configs/mongodbconnection');
const app = express();
const port = 8081;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('home url for our url shortener');
});
app.use(sanitizeInput);
app.listen(port, () => {
  connectdb();
  console.log(`Server is running on port:${port}`);
});
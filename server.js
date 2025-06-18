const express= require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectdb = require('./configs/mongodbconnection');
const app = express();
const port = 8081;
app.use(express.json());
app.get('/', (req, res) => {
  res.send('HOLA!!');
});
app.listen(port, () => {
  connectdb();
  console.log(`Server is running on port:${port}`);
});
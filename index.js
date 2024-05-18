const express = require('express');
const databaseRouter = require('./databaseroute');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/database', databaseRouter);

app.listen(port, () => {
  console.log(`Server is running, listening at http://localhost:${port}`);
});

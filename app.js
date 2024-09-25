const customer_router = require('./routers/customer')
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('hello server');
})
app.use('/customer',customer_router)

app.get('/*', (req, res) => {
    res.status(404).send(`The request ${req.baseUrl}${req.url} does not exist`);
  });
  
  module.exports = app;
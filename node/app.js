const customer_router = require('./routers/customer')
const expense_router = require('./routers/expense')
const receipt_router = require('./routers/receipt')

const express=require('express')
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('hello server');
})
app.use('/customer',customer_router)
app.use('/expense',expense_router)
app.use('/receipt',receipt_router)


app.get('/*', (req, res) => {
    res.status(404).send(`The request ${req.baseUrl}${req.url} does not exist`);
  });
  
  module.exports = app;
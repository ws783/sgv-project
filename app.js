const costomer_router = require('./routers/customer')
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('hello server');
})
app.use('/costomer',costomer_router)

app.get('/*', (req, res) => {
    res.status(404).send(`The request ${req.baseUrl}${req.url} does not exist`);
  });
  
  module.exports = app;
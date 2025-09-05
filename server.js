const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const db = require('./db')
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body

const Person = require('./models/Person');

app.get('/', (req, res) => {
  res.send('Welcome to our Hotels ');
})




const menuroutes = require('./routes/menuroutes');
app.use('/menu', menuroutes);

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

app.listen(PORT, () => {
  console.log(` app listening on port ${PORT}`);
})

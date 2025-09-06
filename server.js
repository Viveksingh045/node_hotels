const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const db = require('./db')
require('dotenv').config(); 
const passport = require('./auth'); // Authentication middleware


// Middleware to parse JSON request bodies
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body

app.use(passport.initialize());


//Authentication using passport local strategy
const localAuthMiddleware = passport.authenticate('local', {session: false})
app.get('/', function(req, res) {
  res.send('Welcome to our Hotels ');
});



//Routes
const menuroutes = require('./routes/menuroutes');
app.use('/menu', menuroutes);

const personRoutes = require('./routes/personRoutes');
app.use('/person',localAuthMiddleware, personRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(` app listening on port ${PORT}`);
})

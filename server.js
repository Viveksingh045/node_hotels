const express = require('express')
const app = express()
const port = 3000
const db = require('./db')

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // req.body

const Person = require('./models/Person');

app.get('/', (req, res) => {
  res.send('Hello World!')
})




const menuroutes = require('./routes/menuroutes');
app.use('/menu', menuroutes);

const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

// app.get('/chicken' , (req, res) =>{
//     var list = {
//         name : 'Chicken Litti',
//         type : 'Main Course',
//         cuisine : 'Indian'
//     }
//     res.send(list)
// })

// app.get('/south', (req, res) =>{
//     res.send('Dosa Sambhar')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

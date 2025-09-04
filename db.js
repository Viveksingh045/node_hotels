const mongoose = require('mongoose')


const mongoURL = "mongodb://localhost:27017/hotels"

mongoose.connect(mongoURL,
    {useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected', () => {
    console.log("MongoDB connected successfully");
});

db.on('error', () => {
    console.error("MongoDB connection error");
});

db.on('disconnected', () => {
    console.log("MongoDB disconnected");
});


module.exports = db;
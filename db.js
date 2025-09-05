const mongoose = require('mongoose')


//const mongoURL = "mongodb://localhost:27017/hotels"

const mongoURL = "mongodb+srv://VKS:Atlas12345@vkscloud.2137i1b.mongodb.net/?retryWrites=true&w=majority&appName=VKSCloud/"
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

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
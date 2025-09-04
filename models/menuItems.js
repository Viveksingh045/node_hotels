const mongoose = require('mongoose');
const menuItemsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true

    },
    description: {
        type: String,
        enum: [ 'Main Course', 'Dessert', 'Beverage'],
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Menu = mongoose.model('Menu', menuItemsSchema);
module.exports = Menu;

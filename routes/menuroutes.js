const express = require('express')
const router = express.Router();

const menuItems = require('./../models/MenuItems');

router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new menuItems(data);

    const response = await newMenu.save();
    console.log('Menu saved:', response);
    res.status(201).json(response);
  } catch (err) {
    console.error('Error saving menu:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/', async (req, res) => {
  try{
    const data = await menuItems.find();
    res.status(200).json(data);
  } catch (err) {
    console.error('Error fetching menu:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:type', async (req, res) => {
  try{
    const type = req.params.type;
    if(type == 'Main Course' || type == 'Dessert' || type == 'Beverage'){
    const data = await menuItems.find({ description: type });
    res.status(200).json(data);
    }else{
      return res.status(404).json({error: 'Invalid menu type'});
    }  
  } catch (err) {
    console.error('Error fetching menu by type:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.put('/:id', async (req, res) => {
  try{
    const menuId = req.params.id;
    const updatedMenuData = req.body; 

    const updatedMenu = await menuItems.findByIdAndUpdate(menuId, updatedMenuData, { new: true });
    if (!updatedMenu) {
      return res.status(404).json({ error: 'Menu item not found' });
    }
    res.status(200).json(updatedMenu);
  } catch (err) {
    console.error('Error updating menu:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
'use strict'
const express = require('express');
const validator = require('../middleware/validator.js');
const Food = require('../models/food.js');
const food = new Food();
const router = express.Router();

router.get('/', getAllFoods);
router.get('/:id',validator, getFoodById);
router.get('/',validator, getFoodById);
router.post('/', createFood);
router.put('/:id',validator,updateFood);
router.put('/',validator,updateFood);
router.delete('/:id',validator,deleteFood);
router.delete('/',validator,deleteFood);

function getAllFoods(req, res) {
    const readFood = food.read();
    res.json(readFood);
};

function getFoodById(req, res) {
    const readFood = food.read(req.params.id)
    res.json(readFood);
}

function createFood(req, res) {
    const createFood = food.create(req.body);
    res.json(createFood);
}

function updateFood(req,res){
    const updateFood = food.update(req.params.id,req.body)
    res.json(updateFood)
}

function deleteFood(req,res){
    const deleteFood = food.delete(req.params.id)
    res.json(deleteFood)
}

module.exports = router;
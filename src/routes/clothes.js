'use strict'
const express = require('express');
const validator = require('../middleware/validator.js');
const Clothes = require('../models/clothes.js');
const cloth = new Clothes();
const router = express.Router();

router.get('/', getAllcloth);
router.get('/:id',validator, getClothById);
router.get('/',validator, getClothById);
router.post('/', createCloth);
router.put('/:id',validator,updateCloth);
router.put('/',validator,updateCloth);
router.delete('/:id',validator,deleteCloth);
router.delete('/',validator,deleteCloth);

function getAllcloth(req, res) {
    const readCloth = cloth.read();
    res.json(readCloth);
};

function getClothById(req, res) {
    const readCloth = cloth.read(req.params.id)
    res.json(readCloth);
}

function createCloth(req, res) {
    const createCloth = cloth.create(req.body);
    res.json(createCloth);
}

function updateCloth(req,res){
    const updateCloth = cloth.update(req.params.id,req.body)
    res.json(updateCloth)
}

function deleteCloth(req,res){
    const deleteCloth = cloth.delete(req.params.id)
    res.json(deleteCloth)
}

module.exports = router;
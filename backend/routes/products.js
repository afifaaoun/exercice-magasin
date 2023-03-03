const express=require('express');
const { AddProduct, getProduct, deleteProduct, updateProduct, GetById } = require('../controllers/controllers');
const productRouter=express.Router();


productRouter.post('/add',AddProduct);
productRouter.get('/list',getProduct);
productRouter.delete('/remove/:id',deleteProduct);
productRouter.put('/update/:id',updateProduct);
productRouter.get('/article/:id',GetById)

module.exports=productRouter
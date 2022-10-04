const { query } = require('express');
const db = require('../models');

const Product = db.products
const Review = db.reviews


const addProduct = async(req,res)=>{
    let info = {
        title : req.body.title,
        price : req.body.price,
        description: req.body.description,
        published : req.body.published
    }
    const product = await Product.create(info)
    console.log(product)
    res.status(200).send(product);
}
const allProduct = async(req,res)=>{
    
    const products = await Product.findAll();
    console.log(products)
    res.status(200).send(products);
}

const updateProduct = async(req, res)=>{
    const ID = req.params.id
    let info = {
        title : req.body.title,
        price : req.body.price,
        description: req.body.description,
        published : req.body.published
    }
    const newProduct =  await Product.update(info, {
        where: {
          id : ID
        }
      });

    res.status(200).send(newProduct);
}



module.exports = {addProduct, allProduct, updateProduct };
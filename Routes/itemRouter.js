const {Router}=require('express');
const itemRouter=Router();
const {body,validationResult}=require("express-validator");

const itemController=require('../Controllers/itemController');
const validateItem=[body("name","must be a string").isAlpha(),body("price","must be a number").isNumeric()];
itemRouter.get('/',(req,res)=>itemController.getAllItems(req,res));
itemRouter.get('/new',(req,res)=>itemController.getItemForm(req,res));
itemRouter.get('/:itemID',(req,res)=>itemController.getSingleItem(req.params.itemID,res));

itemRouter.post('/new',[validateItem],(req,res)=>{
    itemController.addItem(req,res);
    });
module.exports=itemRouter;
const {Router}=require('express');
const itemRouter=Router();
const categories=[1,"dhhd"];
const itemController=require('../Controllers/itemController');

itemRouter.get('/',(req,res)=>itemController.getAllItems(req,res));
itemRouter.get('/new',(req,res)=>itemController.getItemForm(req,res));
itemRouter.get('/:itemID',(req,res)=>itemController.getSingleItem(req.params.itemID,res));

itemRouter.post('/new',(req,res)=>{
    itemController.addItem(req,res);
    });
module.exports=itemRouter;
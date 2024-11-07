const {Router}=require('express');
const itemRouter=Router();
const items={items:"dhhd"};

itemRouter.get('/',(req,res)=>res.send("All items"));
itemRouter.get('/new',(req,res)=>res.send("Add new item"));
itemRouter.get('/:itemID',(req,res)=>res.send(`Item Id ${req.params}`));

itemRouter.post('/new',(req,res)=>{
    res.render('/',{items:items});
    });
module.exports=itemRouter;
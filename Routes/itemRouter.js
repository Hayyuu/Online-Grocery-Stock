const {Router}=require('express');
const itemRouter=Router();

itemRouter.get('/',(req,res)=>res.send("All items"));
itemRouter.get('/new',(req,res)=>res.send("Add new item"));
itemRouter.post('/new',(req,res)=>{
    res.render('/',{items:items});
    });
const {Router}=require('express');
const categoryRouter=Router();

categoryRouter.get('/',(req,res)=>res.send("All Categories"));
categoryRouter.get('/new',(req,res)=>res.send("Add new Category"));
categoryRouter.post('/new',(req,res)=>{
    res.render('/',{categories:categories});
    });
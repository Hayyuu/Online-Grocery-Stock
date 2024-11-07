const {Router}=require('express');
const categoryRouter=Router();
const categoryController=require('../Controllers/categoryController');
categoryRouter.get('/',(req,res)=>categoryController.getAllCategories(req,res));
categoryRouter.get('/new',(req,res)=>res.render('Category/addCategoryForm'));
categoryRouter.get('/:categoryID',(req,res)=>categoryController.getSingleCategory(req.params.categoryID,res));
categoryRouter.post('/new',(req,res)=>categoryController.addCategory(req,res));
module.exports=categoryRouter;
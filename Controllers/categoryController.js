const db=require('../db/queries.js');
async function getAllCategories(req,res){
    const allCategories=await db.getAllCategories();
    res.render('Category/showAllCategory',{allCategories:allCategories});
}
async function getSingleCategory(categoryID,res) {
    const category=await db.getSingleCategory(categoryID);
    const allItems=await db.getAllItemsInCategory(categoryID);
    res.render('Category/showCategory',{category:category,allItems:allItems});
}
async function addCategory(req,res){
    const category=await db.addCategory(req);
    const allCategories=await db.getAllCategories();
    res.render('Category/showAllCategory',{allCategories:allCategories});
}
module.exports={getAllCategories,getSingleCategory,addCategory};
const db=require('../db/queries.js');
const {body,validationResult}=require("express-validator");

async function getAllItems(req,res){
    const allItems=await db.getAllItems();
    res.render('Items/showAllItems',{allItems:allItems});
}
async function getSingleItem(itemID,res) {
    const item=await db.getSingleItem(itemID);
    res.render('Items/showItem',{item:item});
}
async function addItem(req,res){
    const errors=validationResult(req);
    const allCategories=await db.getAllCategories();
    if(!errors.isEmpty()){
        return res.status(500).render('Items/addItemForm',{errors:errors.array(),Categories:allCategories});
    }
    await db.addItem(req);
    const allItems=await db.getAllItems();
    res.render('Items/showAllItems',{allItems:allItems});
}

async function getItemForm(req,res){
    const allCategories=await db.getAllCategories();
    res.render('Items/addItemForm',{Categories:allCategories});
}
module.exports={getAllItems,getSingleItem,addItem,getItemForm};
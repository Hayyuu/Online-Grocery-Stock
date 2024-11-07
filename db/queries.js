const pool = require("./pool");

async function getAllItems() {
  const { rows } = await pool.query("SELECT * FROM items");
  console.log(rows);
  return rows;
}
async function getSingleItem(id) {
  const { rows } = await pool.query(`SELECT * FROM items where item_id=$1`,[id]);
  console.log(rows[0]);
  return rows[0];
}

async function getAllItemsInCategory(categoryID){
  const { rows } = await pool.query(`SELECT * FROM items inner join category on items.category_id=category.category_id where category.category_id=$1`,[categoryID]);
  return rows;
}
async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM category");
  console.log(rows);
  return rows;
}
async function getSingleCategory(categoryID) {
  const res = await pool.query("Select * from category where category_id=$1",[categoryID]);
  return res.rows[0];
}
async function addCategory(req){
  const res=await pool.query('Insert into category (category_name) values($1)',[req.body.name]);
}

module.exports={getAllItems,getSingleItem,getAllItemsInCategory,getAllCategories,getSingleCategory,addCategory};
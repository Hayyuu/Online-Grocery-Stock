const pool = require("./pool");

async function getAllItems() {
  const { rows } = await pool.query("SELECT * FROM items");
  console.log(rows);
  return rows;
}

async function addItem(req){
  const {rows}=await pool.query('select category_id from category where category_name=$1',[req.body.category_name]);
  const category_id=rows.category_id;
  const res=await pool.query('Insert into items (item_name,price,category_id) values($1,$2,$3)',[req.body.name,req.body.price,category_id]);
  console.log("Item added Succesfully")
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
  return rows;
}
async function getSingleCategory(categoryID) {
  const res = await pool.query("Select * from category where category_id=$1",[categoryID]);
  return res.rows[0];
}
async function addCategory(req){
  const res=await pool.query('Insert into category (category_name) values($1)',[req.body.name]);
}

module.exports={getAllItems,getSingleItem,getAllItemsInCategory,addItem,getAllCategories,getSingleCategory,addCategory};
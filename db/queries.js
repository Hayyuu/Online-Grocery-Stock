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
async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM category");
  console.log(rows);
  return rows;
}
async function getSingleCategory(id) {
  console.log(`${id}`);
  const  {rows} = await pool.query("SELECT category_name FROM category WHERE category_id= ($1)",[id]);
  console.log(rows[0]);
  return rows[0];
}
getSingleItem(2);
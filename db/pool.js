require("dotenv").config();

const { Pool } = require("pg");
const user=process.env.USER;
const password=process.env.PASSWORD;
const database=process.env.DATABASE;

// Again, this should be read from an environment variable
module.exports = new Pool({
    host: "localhost", // or wherever the db is hosted
    user:user,
    database: database,
    password: password,
    port: 5432 // The default port
});

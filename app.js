require("dotenv").config();
const path=require('node:path');
const express=require('express');
const app=express();
const PORT=3000;

app.set('views',path.join(__dirname,"Views"));
app.set("view engine","ejs");
app.listen(PORT,()=>console.log(`Server started at port ${PORT}` ));
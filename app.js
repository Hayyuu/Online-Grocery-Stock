require("dotenv").config();
const path=require('node:path');
const itemRouter=require('./Routes/itemRouter');
const categoryRouter=require('./Routes/categoryRouter');
const express=require('express');
const app=express();
app.use(express.urlencoded({ extended: true }));

const PORT=3000;

app.use('/items',itemRouter);
app.use('/category',categoryRouter);
app.set('views',path.join(__dirname,"Views"));
app.set("view engine","ejs");
app.listen(PORT,()=>console.log(`Server started at port ${PORT}` ));
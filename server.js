const express = require ('express');
const connectDb=require('./config/connectDb');
const contactRoute = require('./Routes/contactRoutes');

const app= express();
const port =5003;
app.use (express.json());
connectDb();

// Route principale pour les contacts
app.use ('/',contactRoute);
app.listen (port,(err)=>
err?console.log(err):console.log(`you are connected successfully to the port ${port}`))
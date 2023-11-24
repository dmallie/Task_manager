// import express then inovke express as app
const express  = require('express');
const app = express();
// import routes
const routes = require('./routes/routeTasks');
// setup the db connection
const connectDB = require('./connectDB/connect');
// set environment variables
require('dotenv').config();
// ****************************************************************
// set middleware
// .json middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const cors = require('cors');
app.use(cors());
// set base route path
const baseRoute = '/api/v1/tasks';
app.use(baseRoute, routes);
// define port
const port = process.env.PORT || 3000;
// function which connects with the db then opens the server
const start = async() =>{
       try{
              // invoke connection with the database
              await connectDB(process.env.URL);
              // if connection happens successfully
              // then start listening the server on the given port
              app.listen(port, ()=>{
                     console.log(`listening on port ${port}`);
              })
       }catch(err){
              console.log('Error: ', err);
       }
}
// listen on port

start();
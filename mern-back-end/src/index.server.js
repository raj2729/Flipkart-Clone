const express = require('express');
const env = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app=express();

// Environment variables
env.config();

// mongodb
const url = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@flipkart.uvjxc.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`;
mongoose.connect(
  url, 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }
).then(() => {
  console.log('Database Connected');
  
});

app.use(bodyParser());

app.get('/' , (req,res,next) => {
  res.status(200).json({
    message : "Hello from server"
  })
})

app.post('/data' , (req,res,next) => {
  res.status(200).json({
    message : req.body
  })
})

app.listen( process.env.PORT , () => {
  console.log(`Server running on PORT : ${process.env.PORT}`);
  
} )
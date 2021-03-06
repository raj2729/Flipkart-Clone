const express = require('express');
const env = require('dotenv');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// User Routes
const authRoutes = require('./routes/auths');
const adminRoutes = require('./routes/admin/auths');
const categoryRoutes = require('./routes/category');

app=express();

// Environment variables
env.config();

// mongodb
const url = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@flipkart.uvjxc.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`;
mongoose.connect(
  url, 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex : true
  } 
).then(() => {
  console.log('Database Connected');
  
});

// app.use(bodyParser());
// Same as
app.use(express.json());

app.use('/api' , authRoutes);
app.use('/api' , adminRoutes);
app.use('/api' , categoryRoutes);

app.listen( process.env.PORT , () => {
  console.log(`Server running on PORT : ${process.env.PORT}`);
  
} )
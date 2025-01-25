const express = require('express');
const sequelize = require('./util/DB');
const AdminRouter = require('./router/AdminRouter');
const AdminModel = require('./model/AdminModel');

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type",
      "Authorization"
    );
    next();
  });
app.use(express.json())

app.use('/admin', AdminRouter);



sequelize.sync().then(()=>{
  app.listen(8080, ()=>{
    console.log('hello-world')
  })
})



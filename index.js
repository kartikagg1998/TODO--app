const express=require('express');
const path=require('path');

//requiring momgoose
const db=require('./config/mongoose');

//Here Todo_list contains the structure(schema) of the todo_app
const Todo_list=require('./models/todo_list');

const port=8000;
const app=express();

//view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//middleware
app.use(express.urlencoded());

//assets folder contains css,js ,images folders for adding styles and javascript to Todo-app
app.use(express.static('assets'));

//setting up the routes
app.use('/',require('./routes/index'));


//for running the server on port 8000
app.listen(port,function(err)
{
    if(err)
    {
        console.log("error",err);
        return;
    }
    console.log("Server is running on port",port);
})
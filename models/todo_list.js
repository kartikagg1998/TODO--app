const mongoose=require('mongoose');

//schema for TODO-App
const todo_listSchema=new mongoose.Schema({
    
    description:
    {
        type:String,
        required:true,
    },
    category:
    {
        type:String,
        required:true,
    },
     dueDate:
     {
         type:String,
         required:true,
     },
     priority:
     {
        type:String,
        required:true,
     }

});

//create model

const Todo_list=mongoose.model('Todo_list',todo_listSchema);  //mongoose.model(modelName, schema):
module.exports=Todo_list;


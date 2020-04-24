const db = require('../config/mongoose');
const Todo_list = require('../models/todo_list.js');

//displaying the content on home page
module.exports.home=function(request,response)
    {
        Todo_list.find({},function(err,todolist)
   {
       if(err)
       {
           console.log("error in fetching todo_list_item from database");
           return;
       }
       return response.render('home',{
        title:"Todo_list",
        list:todolist,
       });
     });
};
 
//contoller for adding the task in TODO list

module.exports.addTask=function(request,response){


    Todo_list.create(
        {
            description:request.body.description,
            category:request.body.category,
            dueDate:request.body.dueDate,
            priority:request.body.priority,
            
        },function(err,newtodo_list_item)
        {
            if(err)
            {
                console.log("error in adding a new item in todo-list");
                return;
            }
            console.log("*****",newtodo_list_item);
            return response.redirect('back');
        });
};

    
  //contoller for deleting the task from TODO-list

    module.exports.deleteTask=function(request,response)
 {     
    let id= request.query;
    //to check no of tasks to be deleted
   var count=Object.keys(id).length;
    
    for(let i=0;i<count;i++){
        //deleting the task from database by using their id
   Todo_list.findByIdAndDelete(Object.keys(id)[i],function(err)

    {
        console.log(Object.keys(id)[i]);
         if(err)
       {
             console.log("error in deleting list-item from database");
             return;
         }
        
     });
    } return response.redirect('back');
 };

    
    
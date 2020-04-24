const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller');

//all the controllers for the routes are defined in home_controller
router.get('/',homeController.home);

//route for adding the task
router.post('/addTask',homeController.addTask);

//route for deleting the task
router.get('/deletetask',homeController.deleteTask);

module.exports=router;

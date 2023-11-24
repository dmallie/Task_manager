// import database schema
const Schema = require('../model/dbSchema');
// get all tasks 

const listAllTasks = async(req, res) =>{
       try{
              // fetch all Schemas from the database
              const tasks = await Schema.find({});
              
              // If the operation fails to fetch any
              if(!tasks){
                     // return 404
                     return res.status(404).json({message: 'Task not found'});
              }
              res.status(200).json({ tasks });
       }catch(err){
              // send status code 500
              res.status(500).json({message: err.message});
       }
};
// select a single task
const getSingleTask = async(req, res) =>{
       try{
              // get the id of the task from the request object
              const { taskID } = req.params;
              // using taskID try to fetch the task we are interested in
              const task = await Schema.findOne({_id:taskID});
              // if the task is not found
              if(!task){
                     // return 404
                     return res.status(404).json({message: 'Task not found'});
              }
              res.status(200).json({ task });
       }catch(err){
              res.status(500).json({message: err.message});
       }

};
// create a new task
const createTask = async(req, res) =>{
       try{
              //get the content of the task from the request object
              const taskContent = req.body;
              console.log('taskContent: ', taskContent);
              // create the task 
              const newTask = await Schema.create( req.body); 
              // if creating a task fails
              if(!newTask){
                     // return 404
                     return res.status(404).json({message: 'Fails to create a new task'});
              }
              res.status(200).json({ newTask });

       }catch(err){
              res.status(500).json({message: err.message});
       }
};
// update the content of an existing task
const updateTask = async(req, res, next) =>{
       try{
              // get the id of the task from req object
              const { id: taskID } = req.params 
              // fetch the task from db using its id
              // FindOneAndUpdat takes two arguments
              // 1. document id
              // 2. document content
              const task = await Schema.findOneAndUpdate( {_id: taskID},  req.body,
                            {new: true,
                            runValidators: true, });
              // test if task is null
              if(!task){
                     // return 404
                     return res.status(404).json({message: 'Task is not created'})
              }
              res.status(200).json({ task });
       }catch(err){
              // return 500
              res.status(500).json({message: err.message});
       }
};
// delete the existing task
const deleteTask = async(req, res, next) =>{
       try{       
              // get the id of the task
              const { id: taskID } = req.params;
              // delete the task from db using its id
              const taskDeleted = await Schema.findOneAndDelete( {_id:taskID });
              console.log('taskDeleted : ', taskDeleted);
              if(!taskDeleted){
                     return res.status(404).json({ message: 'Task is not deleted'});
              }
              res.status(200).json({ task: none , status: 'success' });
       }catch(err){
              res.status(500).json({ message: err.message });
       }
};

module.exports = { listAllTasks, getSingleTask, createTask, updateTask, deleteTask };
// import express module and invoke Router out of it
const express = require('express');
const router = express.Router();
// import all crud operators from controller module
const { listAllTasks, getSingleTask, createTask, updateTask, deleteTask } = require('../controller/crud_operation');

// bind crud operators with their respective routes
router.route('/').get(listAllTasks).put(createTask);
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask);
// export router
module.exports = router;

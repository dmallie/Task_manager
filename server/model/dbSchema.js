// import mongoose 
const mongoose = require('mongoose');
// invoke mongoose
const TaskSchema = new mongoose.Schema({
       name: {
              type: 'String',
              trim: true,
              required: [true, 'This field is required'],
              maxlength: [40, 'Name cannot be more than 30 characters']
       },
       completed: {
              type: 'Boolean',
              default: false
       }
});

// export TaskSchema
module.exports = mongoose.model('Schema', TaskSchema);
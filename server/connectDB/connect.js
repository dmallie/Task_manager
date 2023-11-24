// import mongoose module
const mongoose = require('mongoose');
// invoke mongoose
const connectDB = (url) =>{
       return mongoose.connect(url);
}
// export the connection
module.exports = connectDB;
       
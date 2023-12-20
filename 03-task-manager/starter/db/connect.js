const mongoose = require('mongoose');

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true, // Not needed if w're using Mongoose ver >= 6
        useCreateIndex: true, // Not needed if w're using Mongoose ver >= 6
        useFindAndModify: false, // Not needed if w're using Mongoose ver >= 6
        useUnifiedTopology: true // Not needed if w're using Mongoose ver >= 6
    });
};

module.exports = connectDB;

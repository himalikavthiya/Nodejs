const mongoose=require('mongoose');

const config=require('../config/config');

const connectDB = async () => {
    mongoose.connect(config.mongodb.url,config.mongodb.options)
        .then((data) => {
            console.log(`Database connection Successfully! http://localhost:8080`);
        })
        .catch((error) => {
            console.log("Database connection error", error);
        });
}
module.exports = {
    connectDB
};
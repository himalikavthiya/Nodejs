const mongoose=require('mongoose');

const config=require('../config/config');

const connectDB = async () => {
    mongoose.connect("mongodb+srv://hemalipatel3997:8E40cw9pACCzltjZ@cluster0.p8t0wqz.mongodb.net/", config.mongodb.options)
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
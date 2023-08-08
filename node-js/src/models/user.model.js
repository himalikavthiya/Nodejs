const mongoose = requier('mongoose');

const userSchema = new mongoose.Schema({
    
        first_name: {
            type: String,
            trim: true
        },
        last_name: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true
        },
        password:{
            type:String,
        },
        is_active:{
            type:Boolean
        },
    },
    {
        timestamps: true,
    }
);

const User=mongoose.model("user",userSchema);
module.exports=User;
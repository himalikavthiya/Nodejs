
const mongoose=require('mongoose');
const bookDetailSchema= new mongoose.Schema({
    book_name:{
        type:String,
        trim:true
    },
    book_authar_name:{
        type:String,
        trim:true
    },
    book_disc:{
        type:String,
        trim:true,
    },
    book_price:{
        type:Number,
    },
    is_active:{
        type:Boolean,
        default:true
    },
},{
    timestamps:true
});
const book=mongoose.model("bookstore",bookDetailSchema)

module.exports=book;
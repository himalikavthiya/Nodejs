const mongoose = requier('mongoose')
const categorySchema = new mongoose.Schema({
    category_name: {
        type: String,
        trim: true
    },
    cotegory_dic: {
        type: String,
        trim: true
    },
    is_active: {
        type: Boolean,
        default: true
    },
}, {
    timestamps: true
    
});

const category = mongoose.model("category", categorySchema)

module.exports = category
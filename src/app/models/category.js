const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
    name: {
        type: String,
        requitred: true,
        unique: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    type: {
        type: String
    }
});

module.exports = new mongoose.model('Category', CategorySchema);
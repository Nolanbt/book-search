const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const booksSchema = new Schema({
    title: { type: String, required: true },
    author: { type: [String]},
    description: String,
    image: {type: String, default: ""},
    link: String,
    saved: {type: Boolean, default: false}
});

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;

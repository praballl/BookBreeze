import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    
    author: String,
    country: String,
    imageLink: String,
    free:Boolean,
    language: String,
    link: String,
    pages: Number,
    title: String,
    year: Number
});
const Book = mongoose.model("Book", bookSchema);

export default Book;
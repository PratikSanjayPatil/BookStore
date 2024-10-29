const bookSchema = require("../Model/book.model")

const getBook = async(req,res)=>{
    try{
        const book = await bookSchema.find();
        res.status(200).json(book);
    }
    catch(err){
        res.status(500).json(err);
    }
}

const postBook = async(req,res)=>{
    try {
        const newBook = new bookSchema(req.body);
        const addBook = await newBook.save();
        res.status(201).json({message:"Book add succesfully!",addBook});
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {getBook,postBook}
// module.exports = postBook

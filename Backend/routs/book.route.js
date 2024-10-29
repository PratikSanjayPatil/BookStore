const express = require("express");
const {getBook,postBook} = require("../Controllers/book.controller");


const router = express.Router();

router.get("/",getBook)
router.post("/",postBook)

module.exports = router

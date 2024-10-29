const express = require('express')
const dotenv = require("dotenv")
const app = express()
const connectDb = require("./Config/db")
const cors = require("cors")

//Define Router

const bookRouter = require("./routs/book.route");
const userRouter = require("./routs/user.rout");

dotenv.config();

const PORT = process.env.PORT || 4000;

//middlewares

app.use(express.json());
app.use(cors());

//defining routes

app.use("/books",bookRouter)
app.use("/user",userRouter)

app.listen(PORT, async() => {
    try{
        await connectDb();
        console.log(`Example app listening on port ${PORT} and database connected`);
    }
    catch(err){
        console.log(err);
    }
})

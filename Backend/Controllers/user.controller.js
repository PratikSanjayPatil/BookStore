const userSchema = require("../Model/user.model");
const bcryptjs = require("bcryptjs")

const signup = async(req,res)=>{
    try{
        const {fullname,email,password} = req.body;
        const user = await userSchema.findOne({email})
        if(user){
            return res.status(400).json({message:"User already exists!"});
        }

        const hashPassword = await bcryptjs.hash(password,10)

        const createdUser = new userSchema({
            fullname:fullname,
            email:email,
            password:hashPassword
        })

        await createdUser.save();
        res.status(201).json({message:"User created succesfully!", user:{
            _id:createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.fullname
        }})
    }
    catch(err){
        res.status(500).json({message:"Internal server error!"})
    }
}


const login = async(req,res) =>{
    try {
        const {email,password} = req.body;
        const user = await userSchema.findOne({email});
        const isMatch = await bcryptjs.compare(password,user.password);

        if(!user || !isMatch){
            return res.status(400).json({message:"Invalid username or password!"});
        }else{
            res.status(200).json({message:"Login succesfull",
                user:
                {   
                    id:user.id,
                    fullname:user.fullname,
                    email:user.email
                }})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Server error",error})
    }
}



module.exports = [signup,login];

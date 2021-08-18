const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const regCollect = require("../models/regCollect.js");
const secret = 'test';

const signup = async (req, res) => {
const {name, email, password } = req.body;
console.log(name,email,password)
  try {
    const oldUser = await regCollect.findOne({ email });

    if (oldUser) 
    
    return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await regCollect.create({ email, password: hashedPassword, name });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};

// --
const signin = async (req, res) => {
    const { email, password } = req.body;
    // console.log(email,password)
    // console.log(req.body)
    try {
        const oldUser = await regCollect.findOne({ email });
  
      if (!oldUser) {
          return res.status(404).json({ message: "User doesn't exist" });
      }
      const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
  
      if (!isPasswordCorrect) {
          return res.status(400).json({ message: "Invalid credentials" });
      }
      const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });
      
    //   console.log("token1:-",token)  //got token
    //   console.log("olduser2:-",oldUser)  //signup wala data
      res.status(200).json({ result: oldUser, token });
    
    } catch (err) {
      res.status(500).json({ message: "Something went wrong" });
    }
  };
  
  const loginmemberusers =async (req,res)=>{
    try {
        const allData= await regCollect.find({})
        // console.log("allDATA",allData)
        res.status(200).json(allData)
    } catch (error) {
        res.status(404).json({message:error.message})
        }
}  

module.exports={signup,signin,loginmemberusers}
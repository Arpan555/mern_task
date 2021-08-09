const express=require("express")
const bodyParser= require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")
const app=express()
const users_router = require("./routes/users.js")
const user_router=require("./routes/user.js")
app.use(bodyParser.json())
app.use(cors())
app.use("/users",users_router)
app.use("/user"),user_router)
const URL="mongodb://localhost:27017/arpan-api"
const port=8000
mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>app.listen(port,()=>console.log(`server runnig on ${port}`)))
.catch((error)=>console.log(`${error} did not connect`))

mongoose.set('useFindAndModify', false);

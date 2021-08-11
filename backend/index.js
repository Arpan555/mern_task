const express=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
const reg_router = require("./routes/reg")
const users_router=require("./routes/users")
app.use(bodyParser.json())
app.use(cors())
app.use(reg_router)
app.use(users_router)
const URL="mongodb://localhost:27017/pastworking11_merncrud"
const port=8000

mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>app.listen(port,()=>console.log(`server running on ${port}`)))
.catch((error)=>console.log(`${error} didnot connect`))

mongoose.set("useFindAndModify",false)
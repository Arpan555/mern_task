const express=require("express")
const bodyParser= require("body-parser")
const mongoose = require("mongoose")
const cors = require("cors")
const app=express()
const userrouter = require("./routes/users.js")
app.use(bodyParser.json())
app.use(cors())
app.use("/api",userrouter)

const URL="mongodb://localhost:27017/arpan-api"
const port=8000
mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>app.listen(port,()=>console.log(`server runnig on ${port}`)))
.catch((error)=>console.log(`${error} did not connect`))

mongoose.set('useFindAndModify', false);

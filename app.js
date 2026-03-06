


const express = require("express")
require("dotenv").config()

const cors = require("cors")


const HttpTxtResponse = require("./utls/httptextresponse.js")


const app = express()
app.use(express.json())

const router = require("./routes/routesUsers")

const mongoose  = require("mongoose")

const url =process.env.Atlas_mongo_url
mongoose.connect(url).then(
    console.log("app run"));
app.use(cors())    

app.use("/api/users", router)

/// ================ NOTFOUND 404 ========>>
const Notfound = (req, res)=>{

res.status(404).json({
  stutus: HttpTxtResponse.FAIL,
  data:{
    msg : "this page not found"
  }
})
}

app.use(Notfound)


app.listen(process.env.port, () => console.log("hello"));

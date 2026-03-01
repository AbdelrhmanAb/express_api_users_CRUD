


const express = require("express")


const app = express()
app.use(express.json())

const router = require("./routes/routesUsers")

const mongoose  = require("mongoose")

const url = "mongodb+srv://bwsbssnnbdddn_db_user:oOGBRW5UqeBZ2Rz9@cluster0.w8efoin.mongodb.net/ENVDB"

mongoose.connect(url).then(
    console.log("app run"));
    

app.use("/api/users", router)




app.listen(3000, () => console.log("hello"));

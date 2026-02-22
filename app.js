


const express = require("express")


const app = express()
app.use(express.json())

const router = require("./routes/routesUsers")


app.use("/api/users", router)




app.listen(3000, () => console.log("hello"));

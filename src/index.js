import dotenv from "dotenv"
dotenv.config({path: './env'})
import connectDb from "./config/database.js"

import express from "express"

connectDb()

const app = express()
const port = process.env.PORT || 8000


app.get('/', (req,res)=>{
    res.send("Jai Sri Ram ")
})


app.listen(port, ()=> console.log(`server is stated running on ${port} as well as http://localhost:${port}`))



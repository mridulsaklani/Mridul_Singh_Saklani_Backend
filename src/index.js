import dotenv from "dotenv"
dotenv.config({})
import connectDb from "./config/database.js"
import cookieParser from "cookie-parser"
import express from "express"
import cors from "cors"

const app = express()
const port = process.env.PORT || 8000

// middlewares 
app.use(express.json({limit: '24kb'}))
app.use(express.urlencoded({extended: true, limit:'32kb'}))
app.use(cookieParser({}))
app.use(express.static("public"))

const whiteListed = [process.env.CORS_ORIGIN]
app.use(cors({
    origin: whiteListed,
    methods: ["GET", 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"]
}))
//routes





app.get('/', (req,res)=>{
    res.send("Jai Sri Ram")
})


connectDb()
.then(()=>{
    app.listen(port, ()=> console.log(`server is stated running on ${port} as well as http://localhost:${port}`))
})
.catch((err) => console.log("Mongo db connection error bc: ", err))





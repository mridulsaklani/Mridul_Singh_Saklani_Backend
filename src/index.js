import dotenv from "dotenv"
dotenv.config()

import express from "express"

const app = express()
const port = process.env.PORT || 8000


app.get('/', (req,res)=>{
    res.send("Jai Sri Ram ")
})


app.listen(port, ()=> console.log(`server is stated running on ${port} as well as http://localhost:${port}`))



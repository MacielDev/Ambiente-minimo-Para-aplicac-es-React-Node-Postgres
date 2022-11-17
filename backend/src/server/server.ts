const express = require("express")

const app = express()

app.use(express.json())

app.get("/health",(req,res)=> {
  return res.json("backend em Json")
})

app.listen(3333,() => console.log("Server is ruinning in 3333"))
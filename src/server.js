const express = require("express")
const app = express()
app.use(express.static("public"));

// set ejs as view engine
app.set('view engine', 'ejs');


app.get("/",(req,res)=>{
    res.render("a");
})

app.get("/snake",(req,res)=>{
    res.sendFile("/snake/index.html",{root: __dirname})
})

app.get("/chess",(req,res)=>{
    res.sendFile("/chess/index.html",{root:__dirname})
})

const port = 4000;
app.listen(port,()=>{
    console.log(`Server running on Port: ${port}`);
})
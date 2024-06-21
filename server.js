const express = require("express");
const path = require("path");
const app = express()

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req,res)=>{
    res.render('home.ejs')
})


app.listen(8000,()=>{
    console.log("server is running on port 8000")
});

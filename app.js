const express = require("express");
const path = require("path")
const app =express();
const hbs = require("hbs");
require("./db/conn");
const Register =require("./models/registers");



const port = process.env.PORT ||3000;

const static_path = path.join(__dirname,"../piblic");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");
//console.log(path.join(__dirname,"../piblic"))
 
app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));
app.use(express.static(static_path));

app.set("view engine", "hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);



app.get("/",(req,res) =>{
res.render("index")
});
app.get("/register", async(req,res) =>{
    try {

        console.log(req.body.Firstname);
        res.send(req.body.Firstname)

    } catch(error){
        res.status(400).send(error);
    }
    });


    app.post("/",(req,res) =>{
        res.render("index")
        });

app.listen(port,()=>{
    console.log(`srever id running at port number ${port}`) 
        
    
})



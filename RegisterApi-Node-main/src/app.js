const express =require("express");
const app=express();
const path=require("path");
const port = process.env.PORT || 2000;
require("./db/conn");
const Student=require('./models/StudentSchema');

const static_path=path.join(__dirname,"../public")
app.use(express.static(static_path));

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/register",async(req,res)=>{
    try{
        const StudentRegis=new Student({  
               name:req.body.name,
               phone:req.body.phone,
           address:req.body.address,
           email:req.body.email,
           password:req.body.password
        })
           StudentRegis.save();
         // res.status(201).render("index");
        res.send("register successful");
    }catch(error)
    {
        res.status(400).send(error);
    }
})


app.listen(port,()=>{
    console.log(`Server Listening at ${port}`)
})
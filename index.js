const express=require('express');
require('dotenv').config();
const app=express();
const cookie=require('cookie-parser')

//middleware
app.use(express.json());
app.use(cookie());


//Routes
const authenticationRouter=require("./routers/authentication")
app.use("/authentication",authenticationRouter);


// app.get('/',(req,res)=>{
//     res.send("hello");
// })

const port=process.env.PORT ??3000;
const dbConnection=require('./database/connect')

dbConnection.then(()=>{
    app.listen(port,()=>{
        console.log("http://localhost:"+port);
    })
}).catch((error)=>{
    console.log("Problem to connect with database");
})


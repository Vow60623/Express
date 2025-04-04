// index ->> first rendring page in backend
// npm i express ->> use to install express
// require ->> use to add any function
// node file name use to run code
// express is module of node

const express = require('express');
const adi = require('./data');
const my = require('./nidhi');
const path = require('path');

// app is a variable which will hold the power of express
const app = express();

// port server location
const port = 3000;

// create json data
// const student = [{name:"Nidhi",id:"1"},
//     {name:"Bhumi",id:"2"},
//     {name:"Prachi",id:"3"},
//     {name:"Anshi",id:"4"},
//     {name:"Riya",id:"5"}
// ]

// rout ->> redirecting page 
// get ->> server want to pass something to client

app.get('/',(req,res)=>{  // rout   -->> / means first entering page
    //res.send("this is my home page");
    // res.json(student);
    // res.json(adi);
    res.json(my);
})
//res.send --> when we send file or data in same directory
//res.sendFile --> when we crate new folder and want integrate both the folders
// app.get('/aboutus',(req,res)=>{

    //res.send("this is my about us page");
    // res.sendFile(path.join(__dirname,"home.html"));
    // res.sendFile(path.join(__dirname,"about.html"));
    // res.sendFile(path.join(__dirname,"contactus.html"));
// })

//post --> client send data to server
app.use(express.json())
app.post('/api/abes',(req,res)=>{ // create api
    console.log("body",req.body);
    res.json({})
})

// app.listen(3000) ->> also a correct format 
// listen runs the server or recieves request of url
app.listen(port,()=>{
    console.log(`app is running at: ${port}`)
})
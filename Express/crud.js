const express = require('express');
const app = express();

const port =  3000; 

const database = [{id:1,name:'Naina',age:21},
    {id:2,name:'Anshi',age:20}
]

app.use(express.json())// json built in middleware

//Create(C)
app.post('/users',(req,res)=>{
    const newuser={
        id:database.length+1,
        name:req.body.name,
        age:req.body.age
    };
    database.push(newuser);
    res.status(201).json(newuser);
});

//Read(R)-read all

app.get('/users',(req,res)=>{
    res.json(database);
})

//Read-read one

app.get('/users/:id',(req,res)=>{
    const userid = parseInt(req.params.id)  // converter in int -> parseInt 
    const user = database.find(u=>u.id===userid)
    if(user){
        res.json(user);
    }
    else{
        res.status(404).json({message:"user not found"})
    }
})

//Update(U)
//put=>means update
//we need index for update

app.put('/users/:id',(req,res)=>{
    const userid = parseInt(req.params.id)
    const userindex = database.findIndex(u=>u.id===userid)
    if(userindex!==-1)
    {
        database[userindex]={...database[userindex], ...req.body};// ... is spread operator
        res.json(database[userindex]);
    }
    else{
        res.status(404).json({message:"user not found"})
    }
})

//Delete(D)

app.delete('/users/:id',(req,res)=>{
    const userid = parseInt(req.params.id)
    const userindex = database.findIndex(u=>u.id===userid)
    if(userindex!==-1){
        const deleteuser = database.splice(userindex,1); // splice use to delete
        res.json(deleteuser)
    }
    else{
        res.status(404).json({message:"user not found"});
    }
})



app.listen(port,() =>{
    console.log(`app is running on :${port}`);
})
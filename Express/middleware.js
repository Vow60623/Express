const express = require('express');
const app = express();
const port = 3000;

//Middleware is use for authentication and it is a custom middleware or user defined
// const adi = (req,res,next)=>{
//     const age=req.query.age
//     if(!age)
//     {
//         res.send('Plz enter your age')
//     }
//     if(age<=18){
//         res.send('Sorry, Your age is under 18')
//     }
//     next();
// }

const adi = (req,res,next)=>{
    const name=req.query.name
    if(!name)
    {
        res.send('Please, Enter your name!')
    }
    if(name!='Nidhi'){
        res.send('Invalid Candidate!')
    }
    if(name==='Nidhi'){
        res.send('Welcome, Nidhi!')
    }
    
    next();
}

// for all -> we make application middleware
//app.use(adi)

app.get('/',(req,res)=>{
    res.send('This is my home page')
})


//rout middleware -> for any single query

app.get('/about',adi,(req,res)=>{
    res.send('This is my about page')
})

app.listen(port,()=>{
    console.log(`app is running at:${port}`)
})
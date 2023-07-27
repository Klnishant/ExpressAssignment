const express=require('express');

const app=express();

app.use(express.json());

var random=Math.floor(Math.random()*100)+1;

app.get('/',(req,res)=>{
    res.json("This is homepage");
});

app.get('/random',(req,res)=>{
    res.json({random:random});
});

const port=5000;

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}/`);
})
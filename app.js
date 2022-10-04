const express=require('express');
const path=require('path');
const fs=require('fs');
const app=express();
const port=8080;
const http=require('http')

const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}));

const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/DanceContact',{useNewUrlParser:true},{useUnifiedTopology:true});

const contentfile=fs.readFileSync('index.html');
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end(contentfile);
})


server.listen(port,()=>{
    console.log(`the server has been started on the port ${port}`);
 });
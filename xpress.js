const express=require('express')
const app=express()
const path=require('path')
app.listen(3500,()=>console.log('running'))


const one=(req,res,next)=>{
    console.log('one');
    next();
}

const two=(req,res,next)=>{
    console.log('two');
    next();
}

const three=(req,res,next)=>{
    console.log('three');
    res.send('completed')
}


app.get('/chain(.html)?',[one,two,three])

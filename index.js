const { response } = require('express')

const express=require('express')
const app=express()
const ejsLayouts=require('express-ejs-layouts')
//it is module to read file
const fs=require('fs')
// midleware
app.set('view engine','ejs')
app.use(ejsLayouts)

app.use(express.urlencoded({extended:false}))
app.use('/dinosaurs',require('./controller/dinosaurs.js'))
app.use('/prehistoric_creatures',require('./controller/prehistoric_creatures.js'))
app.listen(3000,()=>{
    console.log("working")
})
app.get('/',(req,res)=>{
    res.render('home')
})




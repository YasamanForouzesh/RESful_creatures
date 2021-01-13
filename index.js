//what does do?
const { response } = require('express')
const express=require('express')
const app=express()
const methodOverride=require('method-override')
const ejsLayouts=require('express-ejs-layouts')
//it is module to read file
const fs=require('fs')
// midleware
app.set('view engine','ejs')
app.use(ejsLayouts)
// method-override midleware
app.use(methodOverride('_method'))
// body-parser midleware (puts from data into req.body)
app.use(express.urlencoded({extended:false}))
app.use('/dinosaurs',require('./controller/dinosaurs.js'))
app.use('/prehistoric_creatures',require('./controller/prehistoric_creatures.js'))
app.listen(3000,()=>{
    console.log("working")
})
app.get('/',(req,res)=>{
    res.render('home')
})




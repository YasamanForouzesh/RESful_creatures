const { Router } = require('express')
const express=require('express')
const router=express.Router()
const fs=require('fs')

router.get('/',(req,res)=>{
    let dinosaurs=fs.readFileSync('./dinosaurs.json')
    let dinoData=JSON.parse(dinosaurs)
    res.render('dinosaurs/index.ejs',{myDinos:dinoData})
})
router.get('/new',(req,res)=>{
    res.render('dinosaurs/new.ejs')
})
router.get('/edit/:idx',(req,res)=>{
    let dinosaurs=fs.readFileSync('./dinosaurs.json')
    console.log(dinosaurs)
    let dinoData=JSON.parse(dinosaurs)
    //get array index from url parameter
    let dinoIndex=parseInt(req.params.idx)
    //render page with data of the specified
    res.render('dinosaurs/edit.ejs',{myDino:dinoData[dinoIndex],dinoIdx:dinoIndex})
    
})
router.put('/:idx',(req,res)=>{
    let dinosaurs=fs.readFileSync('./dinosaurs.json')
    let dinoData=JSON.parse(dinosaurs)
    dinoData[req.params.idx].name=req.body.name
    dinoData[req.params.idx].type=req.body.type
    //save the editted dinosaurs to the json file
    fs.writeFileSync('./dinosaurs.json',JSON.stringify(dinoData))
    //render page with data of the specified
    res.redirect('/dinosaurs')
})
router.get('/:idx',(req,res)=>{
    let dinosaurs=fs.readFileSync('./dinosaurs.json')
    console.log(dinosaurs)
    let dinoData=JSON.parse(dinosaurs)
    //get array index from url parameter
    let dinoIndex=parseInt(req.params.idx)
    //render page with data of the specified
    res.render('dinosaurs/show.ejs',{myDinos:dinoData[dinoIndex]})
    console.log(req.params)
})
//post route has to be math the http ver and url
router.post('',(req,res)=>{
    //read the dinosaurs json file
    let dinosaurs=fs.readFileSync('./dinosaurs.json')
    let dinoData=JSON.parse(dinosaurs)
    //add new dino to the array
    dinoData.push(req.body)
    // save new dinosaurs array to the json file  (convert back to json first)
    fs.writeFileSync('./dinosaurs.json',JSON.stringify(dinoData))

    // Redirect to the GET /dinosaurs 
    res.redirect('/dinosaurs')
    console.log("inside")
    console.log(req.body)

})

router.delete('/:idx',(req,res)=>{
    let dinosaurs=fs.readFileSync('./dinosaurs.json')
    let dinoData=JSON.parse(dinosaurs)
    // remove the deleted dinosaur from the dinosaurs array
    dinoData.splice(req.params.idx,1)
    // save the new dinosaurs to the data.json filr
    fs.writeFileSync('./dinosaurs.json',JSON.stringify(dinoData))
    console.log('delete')
    res.redirect('/dinosaurs')
})


module.exports=router
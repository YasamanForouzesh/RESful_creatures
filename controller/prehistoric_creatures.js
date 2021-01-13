const express=require('express')
const router=express.Router()
const fs=require('fs')
router.get('/',(req,res)=>{
    let prehistoricJson=fs.readFileSync('./prehistoric_creatures.json')
    let prehistoricData=JSON.parse(prehistoricJson)
    res.render('prehistoric_creatures/index.ejs',{datas:prehistoricData})
})
router.get('/new',(req,res)=>{
    res.render('prehistoric_creatures/new.ejs')
})
router.get('/:idx',(req,res)=>{
    let prehistoric=fs.readFileSync('./prehistoric_creatures.json')
    let prehistoricData=JSON.parse(prehistoric)
    //get array index from url parameter
    let prehistoricIndex=parseInt(req.params.idx)
    //render page with data of the specified
    res.render('prehistoric_creatures/show.ejs',{myPrehistoric:prehistoricData[prehistoricIndex]})
    console.log(req.params)
})
router.post('/',(req,res)=>{
     //read the dinosaurs json file
     //read the whole array because then we want to push to arr
     let prehistoric=fs.readFileSync('./prehistoric_creatures.json')
     let prehistoricData=JSON.parse(prehistoric)
     //add new dino to the array
     prehistoricData.push(req.body)
     // save new dinosaurs array to the json file  (convert back to json first)
     fs.writeFileSync('./prehistoric_creatures.json',JSON.stringify(prehistoricData))
 
     // Redirect to the GET /dinosaurs 
     // make new request object
     res.redirect('/prehistoric_creatures')
     console.log("inside")
     console.log(req.body)
})
module.exports=router
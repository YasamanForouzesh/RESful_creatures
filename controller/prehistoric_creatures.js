const express=require('express')
const router=express.Router()
const fs=require('fs')
router.get('',(req,res)=>{
    let prehistoricJson=fs.readFileSync('./prehistoric_creatures.json')
    let prehistoricData=JSON.parse(prehistoricJson)
    res.render('prehistoric_creatures/index.ejs',{datas:prehistoricData})
})
router.get('/new',(req,res)=>{
    res.render('prehistoric_creatures/news.ejs')
})
router.post('',(req,res)=>{
     //read the dinosaurs json file
     let prehistoric=fs.readFileSync('./prehistoric_creatures.json')
     let prehistoricData=JSON.parse(prehistoric)
     //add new dino to the array
     prehistoricData.push(req.body)
     // save new dinosaurs array to the json file  (convert back to json first)
     fs.writeFileSync('./prehistoric_creatures.json',JSON.stringify(prehistoricData))
 
     // Redirect to the GET /dinosaurs 
     res.redirect('/prehistoric_creatures')
     console.log("inside")
     console.log(req.body)
})
module.exports=router
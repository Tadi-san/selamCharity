const  express = require('express')
const cors = require('cors')
const app = express()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const cookieParser = require('cookie-parser')
const bcryptSalt = bcrypt.genSaltSync(10)
const mongoose = require("mongoose")
const fs = require('fs')
const Mezgeb = require('./modeles/mezgeb')
const Admin = require('./modeles/Admin')
const { isStringObject } = require('util/types')
const { Console } = require('console')
const jwtSecret = "sgfdahgsdgueryagrysjhd62"
const port = process.env.port
app.use(cookieParser())
app.use(express.json({limit:'25mb'}))
app.use(express.urlencoded({extended: true, limit:'25mb'}))
app.use('/uploads', express.static(__dirname + "/uploads"))
app.use(express.json())
app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}))
const { MongoClient } = require("mongodb");
const adminName = 'abel'
const adminPassword = 'admin1234'
mongoose.connect(process.env.DATABASE_URL)
// main().catch(err => console.log(err));

// async function main() {
//     // await mongoose.connect("mongodb://localhost:27017/Form", {useNewUrlParser:true});
  
//     await mongoose.connect('mongodb://127.0.0.1:27017/Form');
//   }

app.post("/register", async(req,res) => {
    const {name, address, phone, work, lang} = req.body

    try{
        const registerDoc = await Mezgeb.create(
            {name,
                 address,
                  phone, work}
            )
        res.json(registerDoc)  
    }
    catch(e){
        res.status(422).json(e)
    }
    
})

app.get('/admin-info', async(req,res)=>{
    res.json(await Mezgeb.find())
})

app.get('/name/:subpage', async(req,res)=>{
   const {subpage} = req.params
res.json(await Mezgeb.find({name:subpage}))
})

app.get('/phone/:subpage', async(req,res)=>{
    const {subpage} = req.params
 res.json(await Mezgeb.find({phone:subpage}))
 })

 app.get('/address/:subpage', async(req,res)=>{
    const {subpage} = req.params
 res.json(await Mezgeb.find({address:subpage}))
 })
 
 app.get('/work/:subpage', async(req,res)=>{
    const {subpage} = req.params
 res.json(await Mezgeb.find({work:subpage}))
 })

 app.post('/delete/:subpage', async (req,res)=>{
    const {subpage} = req.params
    try {
        await Mezgeb.deleteOne({_id:subpage});
        res.json('Deleted')
        
    } catch (error) {
        res.json(error)
    }

 })

 app.post("/login",async (req,res)=>{
    const {name, password} = req.body;
   const userDoc = await Admin.findOne({name})
   if(userDoc){
    const passOk = bcrypt.compareSync(password, userDoc.password)
    if(passOk){
jwt.sign({
     id:userDoc._id,
    name:userDoc.name}, jwtSecret,{},(err,token)=>{
    if(err) throw err;
    res.cookie('token', token).json(userDoc)
})
       
       }
       else{
        res.status(422).json("pass not ok")
       }
   }
   else{
    res.json("not found")
   }
})

app.get('/:subpage', async(req,res)=>{
   const {subpage} = req.params
res.json(await Mezgeb.findById(subpage))
})


app.post('/:subpage', async(req,res)=>{
    const {subpage} = req.params
    const  {name, phone, address, work} = req.body
    const mezgebData = await Mezgeb.findById(subpage)
    mezgebData.set( {name, phone, address, work})
    await mezgebData.save()
    res.json(mezgebData)
 })
//  try{
//     const userDoc = Admin.create({
//         name:adminName,
//         password:bcrypt.hashSync(adminPassword, bcryptSalt),

//     })
    
// }
// catch(e){
//     console.log(e)
// }





app.listen(port, () => console.log(`Example app listening on port ${port}!`))
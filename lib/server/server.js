const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

const Nedb = require('nedb')
const db = new Nedb({filename: './database/meigen.db',autoload: true})

app.use(cors())
app.listen(port,()=>{})

app.get('/api/v1',(req,res)=>{
    res.send('hello world!')
})

app.get('/api/v1/meigen',(req,res)=>{
    db.count({},(err,count)=>{
        const random = Math.floor(Math.random()*count);
        db.find({}).skip(random).limit(1).exec((err,doc)=>{
            if (err) res.sendStatus(500)
            else res.send(doc)
        })
    })
})
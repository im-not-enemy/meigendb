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
        db.find({$not:{like:false}}).skip(random).limit(1).exec((err,doc)=>{
            if (err) res.sendStatus(500)
            else res.send(doc)
        })
    })
})

app.post('/api/v1/meigen/:_id',(req,res)=>{
    const _id = req.params._id
    const likeString = req.query.like

    let like
    if (likeString === "true") like = true
    else if (likeString === "false") like = false
    else like = undefined

    db.update({_id:_id},{$set:{like:like}},(err,updated)=>{
        if (err) res.sendStatus(500)
        else res.sendStatus(200)
    })
})
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const User = require('./models/UserDetails')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
    res.send("hey")
})
app.post('/register', async(req, res) => {
    try {
        const register = await User.create(req.body)
        res.status(200).json(register)
    } catch (error) {
        console.log('Error found',error)
    }
})
app.get('/register', async(req, res) => {
    const register = await User.find({})
    res.status(200).json(register)
})
app.listen(port, () => { 
    console.log(`Currently running at a ${port}`)
})
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://rajchatterz:mGeNvBe9BxCLGQW1@edtech.df872ze.mongodb.net/?retryWrites=true&w=majority').then((con)=>console.log(`connected with the server ${con.Connection.name}`)).catch((err)=>console.log(err))
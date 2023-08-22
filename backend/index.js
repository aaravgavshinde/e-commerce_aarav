const express = require('express')
const cors = require('cors')
require('./config')
const User = require('./user')
const app = express()
const port = 8080;

app.use(express.json());
app.use(cors())

app.get('/', (req,res) =>{
    res.send("Server is running");
})

app.post('/signup', async (req,res)=>{
    let user = new User(req.body);
    let result = await user.save();
    res.send(result)
})

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})
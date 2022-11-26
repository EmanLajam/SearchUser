const express = require('express');
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routes = require('./routes/routes')
const cors = require('cors')
const bodyParser = require('body-parser');

dotenv.config()
app.use(bodyParser.json());

mongoose.connect(process.env.DATABASE_ACCESS, () =>
 console.log("Database connected"))


 app.get('/', (req, res) => {
    res.send('Hello')
})


 app.use(express.json())
 app.use(cors())
 app.use('/app', routes)

app.listen(4000, () =>{
    console.log("Server Running!")
})
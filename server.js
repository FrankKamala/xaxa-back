import express from 'express';
import mongoose from 'mongoose';
import dateCards from './dbSchema/dateCards.js';
import Cors from 'cors'
import * as dotenv from 'dotenv';

dotenv.config();


const app = express()
const port = process.env.PORT || 8001
//connection 
const db_con = process.env.MONGO_URI
//Middleware
app.use(express.json())
app.use(Cors())

//DB Config
mongoose.connect(db_con)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })



//API Endpoints
app.get("/", (req, res) => res.status(200).send("End point ni Moja get /api/cards "))
//app.get("api/res/dummy",(req, res)=>res.json("{username:'jonte',password:'sinayet'}"))
app.post("/api/store/card",(req, res)=>{
    const cardData = req.body
    dateCards.create(cardData, (err, data) => {
                if(err) {
                        res.status(500).send(err)
                } else {
                        res.status(201).send(data)
                }
        })
})
app.get('/api/cards', (req, res) => {
        dateCards.find((err, data) => {
                if(err) {
                        res.status(500).send(err)
                } else {
            res.status(200).send(data)
        }
    })
})

//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))

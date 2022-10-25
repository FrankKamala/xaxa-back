import express from 'express';
import mongoose from 'mongoose';
import dateCards from './dbSchema/dateCards.js';


const app = express()
const port = process.env.PORT || 8001
//connection 
const db_con= 'mongodb+srv://Kamala:<404DataLab>@xaxadb-cluster.goiw5re.mongodb.net/?retryWrites=true&w=majority'
//Middleware

//DB Config
mongoose.connect(db_con)



//API Endpoints
app.get("/", (req, res) => res.status(200).send("Get working"))
//app.get("api/res/dummy",(req, res)=>res.json("{username:'jonte',password:'sinayet'}"))
app.post("/api/store/card",(req, res)=>{
    const cardData = req.body()
    Cards.create(cardData, (err, data) => {
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
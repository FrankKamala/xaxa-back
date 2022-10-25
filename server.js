import express from 'express';
import mongoose from 'mongoose';

const app = express()
const port = process.env.PORT || 8003
//connection 
const db_con= 'mongodb+srv://Kamala:<404DataLab>@xaxadb-cluster.goiw5re.mongodb.net/?retryWrites=true&w=majority'
//Middleware

//DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    })

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Get working"))
//app.get("api/res/dummy",(req, res)=>res.json("{username:'jonte',password:'sinayet'}"))
//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))
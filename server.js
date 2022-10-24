import express from 'express';
import mongoose from 'mongoose';

const app = express()
const port = process.env.PORT || 8003

//Middleware

//DB Config

//API Endpoints
app.get("/", (req, res) => res.status(200).send("Get working"))
//Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`))
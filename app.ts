console.log('hello app page!')

import cors from 'cors'
import express from 'express'
import connectDB from './connectDB'
import bodyParser from "body-parser"
import jobRouter from './Routers/jobRouter'
import candidateRouter from './Routers/candidateRouter'
import env from 'dotenv'
env.config()

const app=express();


app.use(cors());
app.use(bodyParser.json());

connectDB();

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.use('/jobs',jobRouter)
app.use('/candidate',candidateRouter)

app.listen(()=>{
    console.log(`example app listening on http://localhost:${process.env.PORT}`)
})

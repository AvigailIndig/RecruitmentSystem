console.log('hello app page!')

import cors from 'cors'
import express from 'express'
import connectDB from './connectDB'
import bodyParser from "body-parser"
import jobRouter from './Routers/jobRouter'
import candidateRouter from './Routers/candidateRouter'


const app=express();
const port=7000

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.use('/jobs',jobRouter)
app.use('/candidate',candidateRouter)

app.listen(port,()=>{
    console.log(`example app listening on http://localhost:${port}`)
})

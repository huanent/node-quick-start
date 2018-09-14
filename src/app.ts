import express from "express";
import bodyParser from 'body-parser'

const app = express();

//body处理
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//开启静态网站托管
app.use(express.static("public"))
app.use("/",(req,rsp)=>{
    rsp.sendFile("public/index.html")
})

export default app
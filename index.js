const express=require("express")
const app=express()
const winston = require('winston');
const expressWinston = require('express-winston');

const logger= expressWinston.logger({
    transports: [
      new winston.transports.File({
        level:"info",
        filename:"info.txt",
        format:winston.format.combine(
            winston.format.colorize(),
            winston.format.prettyPrint(),
            winston.format.timestamp(),
           
        )
      }),
      new winston.transports.File({
        level:"error",
        filename:"error.txt",
        format:winston.format.combine(
            winston.format.prettyPrint(),
            winston.format.timestamp(),
            winston.format.colorize()
        )
      }),
    ],
})
app.use(logger)
app.get("/",(req,res)=>{
    res.send("hello")
})
  
app.listen(4500,(err)=>{
    console.log("server is running")
})
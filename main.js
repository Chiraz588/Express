const express=require('express')

const app=express()
const d = new Date();
    let day = d.getDay();
    let h = d.getHours();
    const logger=(req,res,next)=>{
        if(day<6 && day>0 && h>12 && h<17){next()}
        else{res.send("Please visit us again from monday to friday,from 12am to 5pm")}
    }
    app.use(logger)




const middle=(req, res, next) =>{console.log(req.method)
     next()}
 app.use(middle)    
app.use(express.static('server'))



const PORT=5000
app.listen(PORT, ()=> console.log(`server running on port ${PORT}...`))
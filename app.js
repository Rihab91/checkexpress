const express = require("express")
const app= express()
const port=5000
const date=new Date()
const d= date.getDate()
const hour = date.getHours();
const auth=false
const authMidleware=(req,res,next)=>{
    if(d>=1 && d<6 && hour>9 && hour<17){
        next()
    }
    else{
        res.sendFile(__dirname+'/view/out.html')
    }
}
app.use(authMidleware)
app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/view/home.html')
});
app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+'/view/contact.html')
});
app.get('/service',(req,res)=>{
    res.sendFile(__dirname+'/view/service.html')
});
app.listen(port, (err)=>err? console.log(err): console.log("server is running in port :",port))

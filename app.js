const express = require("express")
const app= express()
const port=5000
const date=new Date()
const d= date.getDay()
const hour = date.getHours();
console.log(d,hour)
//middleware for time verification
const authMidleware=(req,res,next)=>{
    if(d>=1 && d<6 && hour>9 && hour<17){
        // Continue to the next middleware/route handler
        next()
    }
    else{
        res.sendFile(__dirname+'/view/out.html')
    }
}
// verification middleware to all routes
app.use(authMidleware)


// Define routes
app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/view/home.html')
});
app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+'/view/contact.html')
});
app.get('/service',(req,res)=>{
    res.sendFile(__dirname+'/view/service.html')
});
app.get('/css/style.css',(req,res)=>{
    res.status(200).sendFile(__dirname+'/css/style.css')
     })
     // Start the server listen to the port
app.listen(port, (err)=>err? console.log(err): console.log("server is running in port :",port))

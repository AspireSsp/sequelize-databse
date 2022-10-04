const express = require('express');

  
const app = express();
app.use(express.json());

const router = require('./routes/productsRoutes.js');
app.use('/api/v1', router);
app.get("/", async(req,res)=>{
   
    res.send("hi samjauhuw");
})

app.listen(3000, ()=>{
 console.log("server is running on port *5000*");
})
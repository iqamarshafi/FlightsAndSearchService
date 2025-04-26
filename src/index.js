const express= require("express");

const { PORT } = require('./config/serverConfig');

const setupAndStartServer = ()=>{
    // create the express server
    const app = express();
   
    app.listen(PORT,()=>{
        console.log(`Server started at port ${PORT}`);
     
    })
}

setupAndStartServer();
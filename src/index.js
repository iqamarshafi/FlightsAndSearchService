const express= require("express");
const bodyParser = require("body-parser");

const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async ()=>{
    // create the express server
    const app = express();
   
    app.listen(PORT,()=>{
         
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended:true}));

        console.log(`Server started at port ${PORT}`);
     
    })
}

setupAndStartServer();
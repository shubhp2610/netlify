const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get('/',(req,res)=>{
 var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < 40 ; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
 res.json({"SUCCESS" : result});
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);

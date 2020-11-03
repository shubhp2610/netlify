const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get('/',(req,res)=>{
 var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
 for ( var j = 0; j < 6 ; j++ ) {
   for ( var i = 0; i < 7 ; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
  result +="-";
 }
  
 res.json({"SUCCESS" : result});
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);

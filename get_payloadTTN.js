
//-------------------------------------BACKEND--------------------------------------------------
const express = require("express")
var cors = require('cors')
const ttn = require("ttn")
var appID = "aplication-ufam-01"
var accessKey = "ttn-account-v2.8M6ONqBxrPe15YbwaMBxnJtlrSNSwYdAVHzviQBc2n4"

//parametros de requisicao e resposta
let data = ""
ttn.data(appID, accessKey)
  .then(function (client) {
    client.on("uplink", function (devID, payload) {
      console.log("Received uplink from ", devID)
      console.log(payload)
      data = payload;
    })
  })
  .catch(function (error) {
    console.error("Error", error)
    process.exit(1)
  })

  //-------------------------------------FRONTEND--------------------------------------------------
const app = express()
const port = 3000

app.get('/', function (req, res) {
    res.send(data)
    })

    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
    const url = "http://localhost:3000/";

    const options={
          method: 'GET',
          cache: "no-cache", 
          credentials: "same-origin", 
          headers: {"Content-Type": "application/json"}
        };
    
    fetch(url,options)
      .then(res => {
          console.log("Response: ",res);
          return res.json();
    }).then(res=> {
      console.log("res2: ",res)
    }).catch(error => {
      console.log("Error: ",error);
    });


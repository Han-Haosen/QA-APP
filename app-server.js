var express = require('express');
var app = express()
app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist/'));
//basically just put them in the root directory by adding use
app.listen(3000);//using port 3000 
console.log("successful");

var express = require('express');
var app = express();

app.use('/new',function(req,res,next){
  console.log(req.method+ req.originalUrl+" is-anybody-in-there");
  //res.send("is-anybody-in-there");
  next();

});

app.get('/new', function(req, res){
  console.log(req.method+ req.originalUrl);
  //console.log(req.baseUrl);
  //console.log(req.path);
  res.send("Hello World");
});

app.post('/new', function(req,res){
  console.log(req.method + req.originalUrl);
});


app.listen(3000,function(){
  console.log("listening");
});

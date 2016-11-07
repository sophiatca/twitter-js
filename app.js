var express = require('express');
var nunjucks = require('nunjucks');
var app = express();

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

debugger;
nunjucks.configure('views',{ noCache: true });
// nunjucks.render('index.html',locals, function (err,output){
//  console.log(output);
// });
  nunjucks.render('index.html',locals, function (err,output){
    res.send(output);
  });

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use('/new',function(req,res,next){
  console.log(req.method+ req.originalUrl+" is-anybody-in-there");
  //res.send("is-anybody-in-there");
  next();

});

app.get('/new', function(req, res){
  console.log(req.method+ req.originalUrl);
  //console.log(req.baseUrl);
  //console.log(req.path);

  res.send("Hello World?");
});

app.post('/new', function(req,res){
  console.log(req.method + req.originalUrl);
});


app.listen(3000,function(){
  console.log("listening");
});

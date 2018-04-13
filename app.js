var express = require('express');
var path = require('path');
var exphbs = require('express-handlebars');
var app = express();

app.set('views', path.join(__dirname, 'views'));
// app.set('view engine','jade');

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.use(express.static(path.join(__dirname, "public")));


app.get('/', function(req, res){
    res.render('index');
});
app.get('/about', function(req, res){
   res.render('about');
});
app.listen(3000);
console.log('Server is running on port 3000');
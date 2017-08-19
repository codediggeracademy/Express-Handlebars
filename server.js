const express  = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

var app = express();

app.set('views', path.join(__dirname,'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.set('port', (process.env.port || 3000));

const members = ['Tom', 'Mart', 'Dima', 'DC', 'Waldo'];

app.get('/',(req, res) => {
  res.render('home', {
    content: 'This is some content',
    published: true,
    members: members
  });
});

app.listen(app.get('port'), () => {
  console.log('Server Started at port '+app.get('port'));
});
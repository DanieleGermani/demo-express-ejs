const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const morgan = require('morgan');
const app = express();

app.use(expressLayouts);
app.use(
  morgan('combined')
);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('layout', 'layout');

require('./routes')(app);


app.listen(3000, () => {
  console.log('My first app listening on port 3000!');
});

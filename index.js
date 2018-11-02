const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const categorias = require('./routes/categorias');
const publicacoes = require('./routes/publicacoes');

const app = express();
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded());


app.get('/', async (req, res) => {
  res.render('index');
});

app.use('/categorias', categorias);
app.use('/publicacoes', publicacoes);


app.listen(port);
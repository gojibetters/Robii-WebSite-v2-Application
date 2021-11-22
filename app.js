import express from 'express';
import bodyParser from 'body-parser';
import { router } from './routes/common-routes.js';
import 'dotenv/config';

const port = process.env.PORT || 8081;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static('views'));

app.use(express.static('public'));

app.use(express.static('pages'));

app.use('/', router);

app.listen(port, () => {
  console.log('Servidor rodando na porta: ', port);
});

import express from 'express';
import bodyParser from 'body-parser';
import 'dotenv/config';
import cors from 'cors';
import fs from 'fs';
import https from 'https';
import router from './routes/routes.js';

const { PORTHTTP, PORTHTTPS } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static('pages'));

app.use(cors());
app.use(router);

app.listen(PORTHTTP, () =>
  console.log('\x1b[32m\x1b[1mAplicação Rodando em [http]\x1b[0m')
);

https
  .createServer(
    {
      cert: fs.readFileSync('src/SSL/code.crt'),
      key: fs.readFileSync('src/SSL/code.key'),
    },
    app
  )
  .listen(PORTHTTPS, () => {
    console.log('\x1b[32m\x1b[1mAplicação Rodando em [https]\x1b[0m');
  });

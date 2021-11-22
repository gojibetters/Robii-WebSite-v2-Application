import express from 'express';

const router = express.Router();

/*
router.get('/', (req,res)=>{
  res.render('landing-page/index')
}) */

router.get('/posts', (req, res) => {
  res.send('Pagina posts');
});

router.get('/categorias', (req, res) => {
  res.send('Pagina de categorias');
});

export { router };

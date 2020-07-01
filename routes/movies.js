var express = require('express');
var router = express.Router();
const peliculaController = require('../controllers/peliculaController');
const generoController = require('../controllers/generoController');

/* /movies */ 
router.get('/', peliculaController.list);

/* /movies/detail/:id */ 
router.get('/detail/:id', peliculaController.detail);

/* /movies/new */ 
router.get('/new' , peliculaController.top5new);

/* /movies/recommended */ 
router.get('/recommended' , peliculaController.recommended);

/* /movies/search */ 
router.get('/search' , peliculaController.search);
router.post('/search' , peliculaController.searchPost);

/* /movies/crear */
router.get('/crear' , peliculaController.crear);
router.post('/crear',peliculaController.guardar);

/* /movies/edit */
router.get('/edit/:id' , peliculaController.edit);
router.post('/edit/:id' , peliculaController.update);

/* /movies/delete */ 
router.post('/delete/:id' , peliculaController.delete);

/* /movies/genre_detail */
router.get('/genre_detail/:genre_id' , generoController.detail);

module.exports = router;

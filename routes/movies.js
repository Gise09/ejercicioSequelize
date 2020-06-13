var express = require('express');
var router = express.Router();
const peliculaController = require('../controllers/peliculaController');

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

module.exports = router;

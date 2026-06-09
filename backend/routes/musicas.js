const express = require('express');
const router = express.Router();
const musicaController = require('../controllers/musicaController');

router.get('/', musicaController.listar);
router.get('/:id', musicaController.buscar);
router.post('/', musicaController.criar);
router.put('/:id', musicaController.atualizar);
router.delete('/:id', musicaController.deletar);

module.exports = router;

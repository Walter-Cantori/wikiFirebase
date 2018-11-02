const express = require('express');
const router = express.Router();
const api = require('../api');
const controllers = require('../controllers/publicacoes');

router.get('/nova', controllers.novoForm);
router.get('/categoria/:categoria', controllers.getCategories);
router.get('/excluir/:categoria/:id', controllers.deleteCategory);
router.get('/editar/:categoria/:id', controllers.editForm);
router.post('/editar/:categoria/:id', controllers.editCategory);
router.post('/nova', controllers.newCategory);

module.exports = router;
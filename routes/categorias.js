const express = require('express');
const router = express.Router();
const api = require('../api');
const controllers = require('../controllers/categorias');

router.get('/nova', controllers.novoForm);
router.get('/', controllers.getCategories);
router.get('/excluir/:id', controllers.deleteCategory);
router.get('/editar/:id', controllers.editForm);
router.post('/editar/:id', controllers.editCategory);
router.post('/nova', controllers.newCategory);

module.exports = router;
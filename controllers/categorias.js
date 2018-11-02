const api = require('../api');

module.exports = {
  novoForm: (req, res) => {
    res.render('categorias/nova');
  },

  getCategories: async(req, res) => {
    const categorias = await api.list('categorias');
    res.render('categorias/index', { categorias });
  },

  deleteCategory: async(req, res) => {
    await api.apagar('categorias', req.params.id);
    res.redirect('/categorias');
  },

  newCategory: async(req, res) => {
    await api.create('categorias', {
      categoria: req.body.categoria
    });
    res.redirect('/categorias');
  },

  editForm: async(req, res) => {
    const categoria = await api.get('categorias', req.params.id);
    res.render('categorias/editar', { categoria});
  },

  editCategory: async(req, res) => {
    await api.update('categorias', req.params.id , {
      categoria: req.body.categoria
    });
    res.redirect('/categorias');
  }
}
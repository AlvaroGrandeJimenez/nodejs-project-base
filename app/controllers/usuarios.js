const UsuariosService = require('../services/usuarios');
const ErrorHelper = require('../helpers/error');

module.exports = {

  list: (req, res) => {
    UsuariosService
      .list(req.query)
      .then(data => res.status(200).json({ success: true, data }))
      .catch(err => ErrorHelper.response(res, err));
  },

  create: (req, res) => {
    console.log(req)
    UsuariosService
      .create(req.body)
      .then(data => res.status(200).json({ success: true, data }))
      .catch(err => ErrorHelper.response(res, err));
  },

  findById: (req, res) => {
    UsuariosService
      .findById(req.params.id)
      .then(data => res.status(200).json({ success: true, data }))
      .catch(err => ErrorHelper.response(res, err));
  },

  update: (req, res) => {
    UsuariosService
      .update(req.params.id, req.body)
      .then(() => res.status(200).json({ success: true }))
      .catch(err => ErrorHelper.response(res, err));
  },

  delete: (req, res) => {
    UsuariosService
      .delete(req.params.id)
      .then(() => res.status(200).json({ success: true }))
      .catch(err => ErrorHelper.response(res, err));
  },
};

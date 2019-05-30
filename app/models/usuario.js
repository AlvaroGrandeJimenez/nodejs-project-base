const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  apellido:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Usuairo', UsuarioSchema);

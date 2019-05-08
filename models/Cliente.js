var mongoose = require('mongoose');

var ClienteSchema = new mongoose.Schema({

  nome: String,
  cpf: String,
  telefone: String,
  rua: String,
  numero: String,
  complemento: String,
  bairro: String,
  cep: String,
  cidade: String,
  estado: String,
});

module.exports = mongoose.model('Cliente', ClienteSchema);

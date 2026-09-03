const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, 
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
 
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  placa_veiculo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  modelo_veiculo: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = Cliente;
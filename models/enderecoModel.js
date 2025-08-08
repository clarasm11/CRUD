const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Endereco = sequelize.define('Endereco', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  rua: { type: DataTypes.STRING, allowNull: false },
  numero: { type: DataTypes.STRING, allowNull: false },
  complemento: { type: DataTypes.STRING },
  bairro: { type: DataTypes.STRING, allowNull: false },
  cidade: { type: DataTypes.STRING, allowNull: false },
  estado: { type: DataTypes.STRING, allowNull: false },
  cep: { type: DataTypes.STRING, allowNull: false }
}, {
  tableName: 'enderecos',
  timestamps: false
});

module.exports = Endereco;

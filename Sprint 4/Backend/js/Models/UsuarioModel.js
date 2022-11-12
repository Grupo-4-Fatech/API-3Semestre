"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexao_1 = __importDefault(require("../Conexao/conexao"));
const sequelize = require('sequelize');
const UsuarioModel = conexao_1.default.define("usuarios", {
    email: {
        type: sequelize.STRING,
        primaryKey: true
    },
    nome: {
        type: sequelize.Sequelize.STRING,
    },
    senha: {
        type: sequelize.Sequelize.STRING
    },
    tipo_usuario: {
        type: sequelize.Sequelize.INTEGER
    },
});
exports.default = UsuarioModel;

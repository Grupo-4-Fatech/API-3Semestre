"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexao_1 = __importDefault(require("../Conexao/conexao"));
const sequelize = require('sequelize');
const AeronaveModel = conexao_1.default.define("aeronaves", {
    modelo_de_aeronave: {
        type: sequelize.STRING,
        primaryKey: true
    },
    motor: {
        type: sequelize.Sequelize.STRING
    },
    certificacao: {
        type: sequelize.Sequelize.STRING
    },
    peso: {
        type: sequelize.Sequelize.INTEGER
    },
    reversor: {
        type: sequelize.Sequelize.INTEGER
    }
    // overspeed:{
    //     type: sequelize.Sequelize.STRING
    // },
    // flap_de_pouso:{
    //     type: sequelize.Sequelize.INTEGER
    // }
});
exports.default = AeronaveModel;

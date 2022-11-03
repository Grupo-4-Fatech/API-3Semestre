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
    unidade_de_medida: {
        type: sequelize.Sequelize.INTEGER
    },
    certificacao: {
        type: sequelize.Sequelize.STRING
    },
    motor: {
        type: sequelize.Sequelize.STRING
    },
    peso: {
        type: sequelize.Sequelize.INTEGER
    },
    reversor: {
        type: sequelize.Sequelize.INTEGER
    },
    landing_flap: {
        type: sequelize.Sequelize.STRING
    },
    peso_referencia: {
        type: sequelize.Sequelize.INTEGER
    },
    altitude: {
        type: sequelize.Sequelize.INTEGER
    },
    isa: {
        type: sequelize.Sequelize.INTEGER
    },
    vento: {
        type: sequelize.Sequelize.INTEGER
    },
    peso_max: {
        type: sequelize.Sequelize.INTEGER
    },
    peso_min: {
        type: sequelize.Sequelize.INTEGER
    },
    owerweight: {
        type: sequelize.Sequelize.INTEGER
    },
    overspeed_max: {
        type: sequelize.Sequelize.INTEGER
    },
    overspeed_min: {
        type: sequelize.Sequelize.INTEGER
    }
});
exports.default = AeronaveModel;

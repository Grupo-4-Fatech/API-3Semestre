"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexao_1 = __importDefault(require("../Conexao/conexao"));
const sequelize = require('sequelize');
const FlapModel = conexao_1.default.define("cadastro_flap", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    aeronaves: {
        type: sequelize.Sequelize.STRING
    },
    udm: {
        type: sequelize.Sequelize.INTEGER
    },
    flap: {
        type: sequelize.Sequelize.STRING
    },
    ice: {
        type: sequelize.Sequelize.INTEGER
    },
    runway_condicion: {
        type: sequelize.Sequelize.INTEGER
    },
    ref: {
        type: sequelize.Sequelize.INTEGER
    },
    below_weight: {
        type: sequelize.Sequelize.INTEGER
    },
    above_weight: {
        type: sequelize.Sequelize.INTEGER
    },
    alt: {
        type: sequelize.Sequelize.INTEGER
    },
    below_isa: {
        type: sequelize.Sequelize.INTEGER
    },
    above_isa: {
        type: sequelize.Sequelize.INTEGER
    },
    head_wind: {
        type: sequelize.Sequelize.INTEGER
    },
    tall_wind: {
        type: sequelize.Sequelize.INTEGER
    },
    up_hill: {
        type: sequelize.Sequelize.INTEGER
    },
    down_hill: {
        type: sequelize.Sequelize.INTEGER
    },
    vap: {
        type: sequelize.Sequelize.INTEGER
    },
    rev: {
        type: sequelize.Sequelize.INTEGER
    }
});
exports.default = FlapModel;

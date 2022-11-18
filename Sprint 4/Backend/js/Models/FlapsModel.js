"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexao_1 = __importDefault(require("../Conexao/conexao"));
const sequelize = require('sequelize');
const FlapsModel = conexao_1.default.define("flaps", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    flap: {
        type: sequelize.Sequelize.STRING
    },
    aeronave: {
        type: sequelize.Sequelize.STRING
    }
});
exports.default = FlapsModel;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexao_1 = __importDefault(require("../Conexao/conexao"));
const sequelize = require('sequelize');
const ParametrosModel = conexao_1.default.define("parametros", {
    Id: {
        type: sequelize.INTEGER,
        primaryKey: true
    },
    Flap: {
        type: sequelize.Sequelize.INTEGER
    },
    Ice: {
        type: sequelize.Sequelize.BOOLEAN
    },
    RunwayCondicion: {
        type: sequelize.Sequelize.INTEGER
    },
    Ref: {
        type: sequelize.Sequelize.INTEGER
    },
    BelowWeight: {
        type: sequelize.Sequelize.INTEGER
    },
    AboveWeight: {
        type: sequelize.Sequelize.INTEGER
    },
    Alt: {
        type: sequelize.Sequelize.INTEGER
    },
    BelowISA: {
        type: sequelize.Sequelize.INTEGER
    },
    AboveISA: {
        type: sequelize.Sequelize.INTEGER
    },
    HeadWind: {
        type: sequelize.Sequelize.INTEGER
    },
    TallWind: {
        type: sequelize.Sequelize.INTEGER
    },
    UpHill: {
        type: sequelize.Sequelize.INTEGER
    },
    DownHill: {
        type: sequelize.Sequelize.INTEGER
    },
    Vap: {
        type: sequelize.Sequelize.INTEGER
    },
    Rev: {
        type: sequelize.Sequelize.INTEGER
    }
});
exports.default = ParametrosModel;

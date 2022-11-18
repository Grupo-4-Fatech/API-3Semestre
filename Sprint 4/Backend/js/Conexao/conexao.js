"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conexao = new sequelize_1.Sequelize('api', 'root', 'fatec', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});
exports.default = conexao;

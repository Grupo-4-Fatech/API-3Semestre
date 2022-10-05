"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
<<<<<<< HEAD
const conexao = new sequelize_1.Sequelize('api', 'root', '36558891Biel', {
=======
const conexao = new sequelize_1.Sequelize('api', 'root', 'fatec', {
>>>>>>> 087b2d5c0c82de82260debe0aec42b32ba3460a2
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});
exports.default = conexao;

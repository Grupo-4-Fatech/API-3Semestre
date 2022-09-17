"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conexao {
    constructor() {
        this.conectar = () => {
            this.Sequelize = require('sequelize');
            const conexao = new this.Sequelize('api', 'root', 'Ton369811', {
                host: 'localhost',
                dialect: 'mysql',
                define: {
                    timestamps: false
                }
            });
            conexao.authenticate().then(function () {
                console.log("Conectado com sucesso");
            }).catch(function (erro) {
                console.log("Falha ao se conectar:" + erro);
            });
            return conexao;
        };
    }
}
exports.default = Conexao;

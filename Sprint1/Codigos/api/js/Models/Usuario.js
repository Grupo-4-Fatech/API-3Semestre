"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    constructor(email, nome, senha) {
        this.getSenha = () => {
            return this.senha;
        };
        this.email = email;
        this.nome = nome;
        this.senha = senha;
    }
}
exports.default = Usuario;

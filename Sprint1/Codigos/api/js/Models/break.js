"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Break {
    constructor(nome, id) {
        this.getId = () => {
            return this.id;
        };
        this.nome = nome;
        this.id = id;
    }
}
exports.default = Break;

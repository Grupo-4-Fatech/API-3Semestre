"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexao_1 = __importDefault(require("../Connection/conexao"));
const sequelize = new conexao_1.default();
const conexao = sequelize.conectar();
const Breaking_modeVM = conexao.define("breaks", {
    id: {
        type: sequelize.Sequelize.INT,
        primaryKey: true
    },
    nome: {
        type: sequelize.Sequelize.STRING,
    },
});
class Breaking_modeService {
    async buscarPorId(id) {
        return await Breaking_modeVM.findByPk(id, { raw: true });
    }
}
exports.default = Breaking_modeService;

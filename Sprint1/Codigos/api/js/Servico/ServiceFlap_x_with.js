"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexao_1 = __importDefault(require("../Connection/conexao"));
const sequelize = new conexao_1.default();
const conexao = sequelize.conectar();
const Flap_x_withVM = conexao.define("flaps", {
    id: {
        type: sequelize.Sequelize.INT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    brk_conf: {
        type: sequelize.Sequelize.INT,
        allowNull: false,
        foreignKey: true
    },
    ref: {
        type: sequelize.Sequelize.INT,
        allowNull: false,
    },
    weight_below: {
        type: sequelize.Sequelize.INT,
        allowNull: false,
    },
    weight_above: {
        type: sequelize.Sequelize.INT,
        allowNull: false,
    },
    alt: {
        type: sequelize.Sequelize.INT,
        allowNull: false,
    },
    temp_below: {
        type: sequelize.Sequelize.INT,
        allowNull: false,
    },
    temp_above: {
        type: sequelize.Sequelize.INT,
        allowNull: false,
    },
    wind_head: {
        type: sequelize.Sequelize.INT,
        allowNull: false,
    },
    wind_tail: {
        type: sequelize.Sequelize.INT,
        allowNull: false,
    },
    slope_uphill: {
        type: sequelize.Sequelize.INT,
        allowNull: false,
    },
    slope_downhill: {
        type: sequelize.Sequelize.INT,
        allowNull: false,
    },
    vap: {
        type: sequelize.Sequelize.INT,
        allowNull: false,
    },
    rev: {
        type: sequelize.Sequelize.INT,
        allowNull: false,
    },
});
class Flap_x_withService {
    async buscarPorId(id) {
        return await Flap_x_withVM.findByPk(id, { raw: true });
    }
}
exports.default = Flap_x_withService;

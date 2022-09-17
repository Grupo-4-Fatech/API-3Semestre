"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexao_1 = __importDefault(require("../Connection/conexao"));
const aeronave_1 = __importDefault(require("../Models/aeronave"));
const sequelize = new conexao_1.default();
const conexao = sequelize.conectar();
const AeronaveVM = conexao.define("aeronaves", {
    modelo_de_aeronave: {
        type: sequelize.Sequelize.STRING,
        primaryKey: true
    },
    motor: {
        type: sequelize.Sequelize.STRING,
    },
    certificacao: {
        type: sequelize.Sequelize.STRING
    },
    peso: {
        type: sequelize.Sequelize.STRING
    },
    reversor: {
        type: sequelize.Sequelize.STRING
    },
    overspeed: {
        type: sequelize.Sequelize.STRING
    },
    flap_de_pouso: {
        type: sequelize.Sequelize.STRING
    },
});
class AeronaveService {
    salvar(Aeronave) {
        var sucesso = AeronaveVM.create({
            modelo_de_aeronave: Aeronave.modelo_de_aeronave,
            motor: Aeronave.motor,
            certificacao: Aeronave.certificacao,
            peso: Aeronave.peso,
            reversor: Aeronave.reversor,
            overspeed: Aeronave.overspeed,
            flap_de_pouso: Aeronave.flap_de_pouso
        });
        if (sucesso) {
            return true;
        }
        else {
            return false;
        }
    }
    deletar(modelo_de_aeronave) {
        var sucesso = AeronaveVM.destroy({
            where: {
                modelo_de_aeronave: modelo_de_aeronave
            }
        });
        if (sucesso) {
            return true;
        }
        else {
            return false;
        }
    }
    listar() {
        this.listaAeronave = [];
        var lista = AeronaveVM.findAll().then((data) => {
            data.forEach((element) => {
                var aeronave = new aeronave_1.default(element.modelo_de_aeronave, element.motor, element.certificacao, element.peso, element.reversor, element.overspeed, element.flap_de_pouso);
                console.log(aeronave.modelo_de_aeronave + " " + aeronave.motor + " " + aeronave.certificacao + " " + aeronave.peso + " " + aeronave.reversor + " " + aeronave.overspeed + " " + aeronave.flap_de_pouso);
                this.listaAeronave.push(aeronave);
            });
        });
        return this.listaAeronave;
    }
    editar(Aeronave) {
        var sucesso = AeronaveVM.update({
            motor: Aeronave.motor,
            certificacao: Aeronave.certificacao,
            peso: Aeronave.peso,
            reversor: Aeronave.reversor,
            overspeed: Aeronave.overspeed,
            flap_de_pouso: Aeronave.flap_de_pouso
        }, {
            where: {
                mode_de_aeronave: Aeronave.modelo_de_aeronave
            }
        }).catch((e) => {
            console.log(e);
        });
        ;
        if (sucesso) {
            return true;
        }
        else {
            return false;
        }
    }
    async buscarPorModelo_de_aeronave(modelo_de_aeronave) {
        return await AeronaveVM.findByPk(modelo_de_aeronave, { raw: true });
    }
}
exports.default = AeronaveService;

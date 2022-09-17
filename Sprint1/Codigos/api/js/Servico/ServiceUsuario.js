"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conexao_1 = __importDefault(require("../Connection/conexao"));
const Usuario_1 = __importDefault(require("../Models/Usuario"));
const sequelize = new conexao_1.default();
const conexao = sequelize.conectar();
const UsuarioVM = conexao.define("usuarios", {
    email: {
        type: sequelize.Sequelize.STRING,
        primaryKey: true
    },
    nome: {
        type: sequelize.Sequelize.STRING,
    },
    senha: {
        type: sequelize.Sequelize.STRING
    },
});
class UsuarioService {
    salvar(usuario) {
        var sucesso = UsuarioVM.create({
            email: usuario.email,
            nome: usuario.nome,
            senha: usuario.getSenha()
        });
        if (sucesso) {
            return true;
        }
        else {
            return false;
        }
    }
    deletar(email) {
        var sucesso = UsuarioVM.destroy({
            where: {
                email: email
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
        this.listaUsuarios = [];
        var lista = UsuarioVM.findAll().then((data) => {
            data.forEach((element) => {
                var usuario = new Usuario_1.default(element.email, element.nome, element.senha);
                console.log(usuario.email + " " + usuario.nome + " " + usuario.getSenha());
                this.listaUsuarios.push(usuario);
            });
        });
        return this.listaUsuarios;
    }
    editar(usuario) {
        var sucesso = UsuarioVM.update({
            nome: usuario.nome,
            senha: usuario.getSenha()
        }, {
            where: {
                email: usuario.email
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
    async buscarPorEmail(email) {
        return await UsuarioVM.findByPk(email, { raw: true });
    }
}
exports.default = UsuarioService;

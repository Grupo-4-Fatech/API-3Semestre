"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UsuarioModel_1 = __importDefault(require("../Models/UsuarioModel"));
const UsuarioController = (0, express_1.default)();
UsuarioController.post("/CadastrarUsuario", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var dados = req.body;
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.json({
            ok: false,
            mensagem: "Por favor, preencha os dados para realizar o cadastro."
        });
    }
    else {
        try {
            yield UsuarioModel_1.default.create({
                email: dados.email,
                nome: dados.nome,
                senha: dados.senha,
                TipoUsuario: dados.tipoUsuario
            });
            res.json({
                ok: true,
                mensagem: "Usuario cadastrado com sucesso."
            });
        }
        catch (error) {
            if (error == "SequelizeUniqueConstraintError: Validation error") {
                res.json({
                    ok: false,
                    mensagem: "Email já cadastrado."
                });
            }
            else {
                res.json({
                    ok: false,
                    mensagem: error
                });
            }
        }
    }
}));
UsuarioController.patch("/AtualizarUsuario", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var dados = req.body;
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.json({
            ok: false,
            mensagem: "Por favor, preencha os dados para atualizar o cadastro."
        });
    }
    else {
        var email = dados.email;
        UsuarioModel_1.default.findByPk(email === null || email === void 0 ? void 0 : email.toString()).then((data) => __awaiter(void 0, void 0, void 0, function* () {
            if (data != null) {
                yield UsuarioModel_1.default.update({
                    nome: dados.nome,
                    senha: dados.senha
                }, { where: {
                        email: dados.email,
                    } });
                res.json({
                    ok: true,
                    mensagem: "Usuario atualizado com sucesso"
                });
            }
            else {
                res.json({
                    ok: false,
                    mensagem: "Usuario não encontrado"
                });
            }
        }));
    }
}));
UsuarioController.get("/BucarUsuario", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var email = req.query.email;
    yield UsuarioModel_1.default.findByPk(email === null || email === void 0 ? void 0 : email.toString()).then((data) => {
        res.json(data);
    });
}));
UsuarioController.get("/ListarUsuarios", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield UsuarioModel_1.default.findAll({ attributes: { exclude: ['senha', 'tipoUsuario'] } }).then((data) => {
        res.json(data);
    });
}));
UsuarioController.post("/DeletarUsuario", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var email = req.query.email;
    try {
        yield UsuarioModel_1.default.destroy({ where: { email: email } });
        res.json(true);
    }
    catch (e) {
        res.json(false);
    }
}));
exports.default = UsuarioController;

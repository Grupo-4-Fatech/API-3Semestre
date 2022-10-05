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
            mensagem: "Please fill in the details to complete the registration."
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
<<<<<<< HEAD
                mensagem: "User successfully registered."
=======
                mensagem: "Usuário cadastrado com sucesso."
>>>>>>> 087b2d5c0c82de82260debe0aec42b32ba3460a2
            });
        }
        catch (error) {
            if (error == "SequelizeUniqueConstraintError: Validation error") {
                res.json({
                    ok: false,
                    mensagem: "E-mail already registered."
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
            mensagem: "Please fill in the data to update the registration."
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
<<<<<<< HEAD
                    mensagem: "User successfully updated."
=======
                    mensagem: "Usuário atualizado com sucesso"
>>>>>>> 087b2d5c0c82de82260debe0aec42b32ba3460a2
                });
            }
            else {
                res.json({
                    ok: false,
<<<<<<< HEAD
                    mensagem: "User not found."
=======
                    mensagem: "Usuário não encontrado"
>>>>>>> 087b2d5c0c82de82260debe0aec42b32ba3460a2
                });
            }
        }));
    }
}));
UsuarioController.get("/BuscarUsuario", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var email = req.query.email;
    UsuarioModel_1.default.findByPk(email === null || email === void 0 ? void 0 : email.toString()).then((data) => {
        res.json(data);
    });
}));
UsuarioController.get("/ListarUsuarios", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield UsuarioModel_1.default.findAll().then((data) => {
        res.json(data);
    });
}));
UsuarioController.delete("/DeletarUsuario", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var email = req.query.email;
    yield UsuarioModel_1.default.destroy({ where: { email: email } }).then((data) => {
        res.json(data);
    });
}));
exports.default = UsuarioController;

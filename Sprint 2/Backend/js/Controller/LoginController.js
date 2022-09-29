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
const LoginController = (0, express_1.default)();
LoginController.post('/Logar', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var dados = req.body;
    UsuarioModel_1.default.findOne({ where: { email: dados.email, senha: dados.senha } }).then((data) => {
        if (data == null) {
            res.json({
                ok: false,
                usuario: data,
                Mensagem: "Usuario ou Senha incorretos."
            });
        }
        else {
            res.json({ ok: true, usuario: data, Mensagem: "Sucesso" });
        }
    });
}));
exports.default = LoginController;

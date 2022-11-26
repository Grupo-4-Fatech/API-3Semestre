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
const express_1 = require("express");
const FlapsModel_1 = __importDefault(require("../Models/FlapsModel"));
const FlapsController = (0, express_1.Router)();
FlapsController.post("/CadastrarFlaps", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var dados = req.body;
    console.log(dados);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.json({
            ok: false,
            mensagem: "Por favor, preencha os dados para realizar o cadastro."
        });
    }
    else {
        try {
            yield FlapsModel_1.default.create({
                flap: dados.flap,
                aeronave: dados.aeronave
            });
            res.json({
                ok: true,
                mensagem: "Flap cadastrado com sucesso."
            });
        }
        catch (error) {
            if (error == "SequelizeUniqueConstraintError: Validation error") {
                res.json({
                    ok: false,
                    mensagem: "Flap já cadastrado."
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
FlapsController.patch("/AtualizarFlaps", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var dados = req.body;
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.json({
            ok: false,
            mensagem: "Por favor, preencha os dados para atualizar o cadastro."
        });
    }
    else {
        var id = dados.id;
        FlapsModel_1.default.findByPk(id === null || id === void 0 ? void 0 : id.toString()).then((data) => __awaiter(void 0, void 0, void 0, function* () {
            if (data != null) {
                yield FlapsModel_1.default.update({
                    flap: dados.flap,
                    aeronave: dados.aeronave
                }, {
                    where: {
                        id: dados.id
                    }
                });
                res.json({
                    ok: true,
                    mensagem: "Flap atualizado com sucesso"
                });
            }
            else {
                res.json({
                    ok: false,
                    mensagem: "Flap não encontrado"
                });
            }
        }));
    }
}));
FlapsController.get("/BuscarFlaps", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var id = req.query.id;
    FlapsModel_1.default.findByPk(id === null || id === void 0 ? void 0 : id.toString()).then((data) => {
        res.json(data);
    });
}));
FlapsController.get("/ListarFlaps", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield FlapsModel_1.default.findAll({ attributes: { exclude: [''] } }).then((data) => {
        res.json(data);
    });
}));
FlapsController.post("/DeletarFlaps", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var id = req.query.id;
    yield FlapsModel_1.default.destroy({ where: { id: id } }).then((data) => {
    });
}));
exports.default = FlapsController;

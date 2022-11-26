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
const FlapModel_1 = __importDefault(require("../Models/FlapModel"));
const FlapsModel_1 = __importDefault(require("../Models/FlapsModel"));
const FlapController = (0, express_1.Router)();
FlapController.post("/CadastrarFlap", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var dadosFlap = req.body;
    console.log(dadosFlap);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.json({
            ok: false,
            mensagem: "Por favor, preencha os dados para realizar o cadastro."
        });
    }
    else {
        try {
            var sucesso = yield FlapsModel_1.default.create({
                flap: dadosFlap[0].flap,
                aeronave: dadosFlap[0].aeronaves
            });
            if (sucesso) {
                dadosFlap.forEach((dados) => __awaiter(void 0, void 0, void 0, function* () {
                    console.log("entrou");
                    yield FlapModel_1.default.create({
                        aeronaves: dados.aeronaves,
                        udm: parseInt(dados.udm),
                        flap: dados.flap,
                        ice: parseInt(dados.ice),
                        runway_condicion: parseInt(dados.runway_condicion),
                        ref: parseInt(dados.ref),
                        below_weight: parseInt(dados.below_weight),
                        above_weight: parseInt(dados.above_weight),
                        alt: parseInt(dados.alt),
                        below_isa: parseInt(dados.below_isa),
                        above_isa: parseInt(dados.above_isa),
                        head_wind: parseInt(dados.head_wind),
                        tall_wind: parseInt(dados.tall_wind),
                        up_hill: parseInt(dados.up_hill),
                        down_hill: parseInt(dados.down_hill),
                        vap: parseInt(dados.vap),
                        rev: parseInt(dados.rev)
                    });
                }));
            }
            res.json({
                ok: true,
                mensagem: "Flap cadastrado com sucesso."
            });
        }
        catch (error) {
            if (error == "SequelizeUniqueConstraintError: Validation error") {
                console.log(error);
                res.json({
                    ok: false,
                    mensagem: "Flap já cadastrado."
                });
            }
            else {
                console.log(error);
                res.json({
                    ok: false,
                    mensagem: error
                });
            }
        }
    }
}));
FlapController.patch("/AtualizarFlap", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var dadosFlap = req.body;
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.json({
            ok: false,
            mensagem: "Por favor, preencha os dados para atualizar o cadastro."
        });
    }
    else {
        try {
            yield FlapsModel_1.default.update({
                id: dadosFlap[0].id,
                flap: dadosFlap[0].flap,
                aeronave: dadosFlap[0].aeronave
            }, {
                where: {
                    id: dadosFlap[0].id
                }
            });
            dadosFlap.forEach((dados) => __awaiter(void 0, void 0, void 0, function* () {
                var id = dados.id;
                yield FlapModel_1.default.update({
                    aeronaves: dados.aeronaves,
                    udm: dados.udm,
                    flap: dados.flap,
                    ice: dados.ice,
                    runway_condicion: dados.runway_condicion,
                    ref: dados.ref,
                    below_weight: dados.below_weight,
                    above_weight: dados.above_weight,
                    alt: dados.alt,
                    below_isa: dados.below_isa,
                    above_isa: dados.above_isa,
                    head_wind: dados.head_wind,
                    tall_wind: dados.tall_wind,
                    up_hill: dados.up_hill,
                    down_hill: dados.down_hill,
                    vap: dados.vap,
                    rev: dados.rev
                }, {
                    where: {
                        aeronaves: dados.aeronaves, flap: dados.flap, runway_condicion: dados.runway_condicion
                    }
                });
            }));
            res.json({
                ok: true,
                mensagem: "Flap atualizado com sucesso"
            });
        }
        catch (e) {
            res.json({
                ok: false,
                mensagem: "Flap nao encontrado"
            });
        }
    }
}));
FlapController.get("/BuscarFlap", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var id = req.query.id;
    FlapModel_1.default.findByPk(id === null || id === void 0 ? void 0 : id.toString()).then((data) => {
        res.json(data);
    });
}));
FlapController.get("/BuscarFlapParametros", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var id = req.query.id;
    console.log(id);
    FlapsModel_1.default.findByPk(id === null || id === void 0 ? void 0 : id.toString()).then((data) => {
        console.log(data);
        FlapModel_1.default.findAll({ where: { flap: data.flap, aeronaves: data.aeronave, ice: 1 } }).then((dados) => {
            res.json(dados);
        });
    });
}));
FlapController.get("/BuscarFlapParametros2", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var id = req.query.id;
    console.log(id);
    FlapsModel_1.default.findByPk(id === null || id === void 0 ? void 0 : id.toString()).then((data) => {
        console.log(data);
        FlapModel_1.default.findAll({ where: { flap: data.flap, aeronaves: data.aeronave, ice: 2 } }).then((dados) => {
            res.json(dados);
        });
    });
}));
FlapController.get("/ListarFlap", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield FlapsModel_1.default.findAll({ attributes: { exclude: [''] } }).then((data) => {
        res.json(data);
    });
}));
FlapController.delete("/DeletarFlapParametros", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var flap = req.query.flap;
    yield FlapModel_1.default.destroy({ where: { flap: flap } }).then((data) => {
    });
}));
exports.default = FlapController;

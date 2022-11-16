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
const FlapController = (0, express_1.Router)();
FlapController.post("/CadastrarFlap", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
            yield FlapModel_1.default.create({
                Id: parseInt(dados.Id),
                aeronaves: dados.aeronaves,
                Udm: parseInt(dados.Udm),
                Flap: parseInt(dados.Flap),
                Ice: parseInt(dados.Ice),
                RunwayCondicion: parseInt(dados.RunwayCondicion),
                Ref: parseInt(dados.Ref),
                BelowWeight: parseInt(dados.BelowWeight),
                AboveWeight: parseInt(dados.AboveWeight),
                Alt: parseInt(dados.Alt),
                BelowISA: parseInt(dados.BelowISA),
                AboveISA: parseInt(dados.AboveISA),
                HeadWind: parseInt(dados.HeadWind),
                TallWind: parseInt(dados.TallWind),
                UpHill: parseInt(dados.UpHill),
                DownHill: parseInt(dados.DownHill),
                Vap: parseInt(dados.Vap),
                rev: parseInt(dados.Rev)
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
FlapController.patch("/AtualizarFlap", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var dados = req.body;
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.json({
            ok: false,
            mensagem: "Por favor, preencha os dados para atualizar o cadastro."
        });
    }
    else {
        var Id = dados.Id;
        FlapModel_1.default.findByPk(Id === null || Id === void 0 ? void 0 : Id.toString()).then((data) => __awaiter(void 0, void 0, void 0, function* () {
            if (data != null) {
                yield FlapModel_1.default.update({
                    aeronaves: dados.aeronaves,
                    Udm: dados.Udm,
                    Flap: dados.Flap,
                    Ice: dados.Ice,
                    RunwayCondicion: dados.RunwayCondicion,
                    Ref: dados.Ref,
                    BelowWeight: dados.BelowWeight,
                    AboveWeight: dados.AboveWeight,
                    Alt: dados.Alt,
                    BelowISA: dados.BelowISA,
                    AboveISA: dados.AboveISA,
                    HeadWind: dados.HeadWind,
                    TallWind: dados.TallWind,
                    UpHill: dados.UpHill,
                    DownHill: dados.DownHill,
                    Vap: dados.Vap,
                    rev: dados.Rev
                }, {
                    where: {
                        Id: dados.Id
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
FlapController.get("/BuscarFlap", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var Id = req.query.Id;
    FlapModel_1.default.findByPk(Id === null || Id === void 0 ? void 0 : Id.toString()).then((data) => {
        res.json(data);
    });
}));
FlapController.get("/ListarFlap", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield FlapModel_1.default.findAll({ attributes: { exclude: [''] } }).then((data) => {
        res.json(data);
    });
}));
FlapController.delete("/DeletarFlap", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var Id = req.query.Id;
    yield FlapModel_1.default.destroy({ where: { Id: Id } }).then((data) => {
    });
}));
exports.default = FlapController;

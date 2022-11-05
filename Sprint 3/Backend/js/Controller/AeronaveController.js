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
const AeronaveModel_1 = __importDefault(require("../Models/AeronaveModel"));
const AeronaveController = (0, express_1.Router)();
AeronaveController.post("/CadastrarAeronave", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
            yield AeronaveModel_1.default.create({
                modelo_de_aeronave: dados.modelo_de_aeronave,
                unidade_de_medida: dados.unidade_de_medida,
                certificacao: dados.certificacao,
                motor: dados.motor,
                peso: parseInt(dados.peso),
                reversor: parseInt(dados.reversor),
                landing_flap: dados.landing_flap,
                peso_referencia: parseInt(dados.peso_referencia),
                altitude: parseInt(dados.altitude),
                isa: parseInt(dados.isa),
                vento: parseInt(dados.vento),
                peso_max: parseInt(dados.peso_max),
                peso_min: parseInt(dados.peso_min),
                owerweight: parseInt(dados.owerweight),
                overspeed: parseInt(dados.overspeed),
                slope: parseFloat(dados.slope),
                temp_ref: parseInt(dados.temp_ref)
            });
            res.json({
                ok: true,
                mensagem: "Aeronave cadastrada com sucesso."
            });
        }
        catch (error) {
            if (error == "SequelizeUniqueConstraintError: Validation error") {
                res.json({
                    ok: false,
                    mensagem: "Aeronave já cadastrada."
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
AeronaveController.patch("/AtualizarAeronave", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var dados = req.body;
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.json({
            ok: false,
            mensagem: "Por favor, preencha os dados para atualizar o cadastro."
        });
    }
    else {
        var modelo_de_aeronave = dados.modelo_de_aeronave;
        AeronaveModel_1.default.findByPk(modelo_de_aeronave === null || modelo_de_aeronave === void 0 ? void 0 : modelo_de_aeronave.toString()).then((data) => __awaiter(void 0, void 0, void 0, function* () {
            if (data != null) {
                yield AeronaveModel_1.default.update({
                    modelo_de_aeronave: dados.modelo_de_aeronave,
                    unidade_de_medida: dados.unidade_de_medida,
                    certificacao: dados.certificacao,
                    motor: dados.motor,
                    peso: dados.peso,
                    reversor: dados.reversor,
                    landing_flap: dados.landing_flap,
                    peso_referencia: dados.peso_referencia,
                    altitude: dados.altitude,
                    isa: dados.isa,
                    vento: dados.vento,
                    peso_max: dados.peso_max,
                    peso_min: dados.peso_min,
                    owerweight: dados.owerweight,
                    overspeed: dados.overspeed,
                    slope: dados.slope,
                    temp_ref: dados.temp_ref
                }, { where: {
                        modelo_de_aeronave: dados.modelo_de_aeronave
                    } });
                res.json({
                    ok: true,
                    mensagem: "Aeronave atualizada com sucesso"
                });
            }
            else {
                res.json({
                    ok: false,
                    mensagem: "Aeronave não encontrada"
                });
            }
        }));
    }
}));
AeronaveController.get("/BuscarAeronave", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var modelo_de_aeronave = req.query.modelo_de_aeronave;
    AeronaveModel_1.default.findByPk(modelo_de_aeronave === null || modelo_de_aeronave === void 0 ? void 0 : modelo_de_aeronave.toString()).then((data) => {
        res.json(data);
    });
}));
AeronaveController.get("/ListarAeronave", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield AeronaveModel_1.default.findAll({ attributes: { exclude: ['unidade_de_medida', 'certificacao', 'motor', 'peso', 'reversor', 'landing_flap', 'peso_referencia', 'altitude', 'isa', 'vento', 'peso_max', 'peso_min', 'owerweight', 'overspeed', 'slope', 'temp_ref'] } }).then((data) => {
        res.json(data);
    });
}));
AeronaveController.delete("/DeletarAeronave", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var modelo_de_aeronave = req.query.modelo_de_aeronave;
    yield AeronaveModel_1.default.destroy({ where: { modelo_de_aeronave: modelo_de_aeronave } }).then((data) => {
    });
}));
exports.default = AeronaveController;

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
const Parametros_1 = __importDefault(require("../Models/Parametros"));
const CalculoController = (0, express_1.default)();
CalculoController.post("/calcular", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var dados = req.body;
    yield Parametros_1.default.findOne({ raw: true,
        where: {
            Flap: dados.Flap,
            Ice: dados.Ice,
            RunwayCondicion: dados.RunwayCondicion
        } }).then((data) => {
        var valor = {
            Peso: 20,
            Alt: 1800,
            LikeWind: 2,
            Wind: 2,
            Temp: 24,
            LikeSlope: 2,
            Slope: 0.1,
            Rev: 1
        };
        res.json(calcular(data, dados));
    });
}));
var calcular = function (dados, valores) {
    //PESO TONELADAS
    //ALTURA FEET
    //TEMPERATURA GRAUS
    //WIND KT (NÓS)
    //SLOPE PORCENTAGEM
    //REVERSOR UN
    var valorReferencia = dados.Ref;
    var peso = 0;
    var altura = 0;
    var temp = 0;
    var wind = 0;
    var slope = 0;
    var rev = 0;
    //VALORES DE PESO
    if (valores.Peso > 18) {
        peso = peso + (valores.Peso - 18) * dados.AboveWeight;
    }
    else if (valores.Peso < 18) {
        peso = peso + (18 - valores.Peso) * dados.BelowWeight;
    }
    //ALTURA
    altura = (dados.Alt / 1000) * valores.Alt;
    //TEMPERATURA
    if (valores.Temp > 15) {
        temp = (dados.AboveISA / 5) * valores.Temp;
    }
    else if (valores.Temp < 15) {
        temp = (dados.BelowISA / 5) * valores.Temp;
    }
    //1 == HEADWIND
    //1 == TALLWIND
    if (valores.LikeWind == 1) {
        wind = (dados.HeadWind / 5) * valores.Wind;
    }
    else if (valores.LikeWind == 2) {
        wind = (dados.TallWind / 5) * valores.Wind;
    }
    //1 == UPHILL
    //2 == DOWNHILL
    if (valores.LikeSlope == 1) {
        slope = dados.UpHill * valores.Slope;
    }
    else if (valores.LikeSlope == 2) {
        slope = dados.DownHill * valores.Slope;
    }
    //REVERSOR
    rev = dados.Rev * valores.Rev;
    //RESPOTA EM METROS
    return (valorReferencia + peso + altura + temp + wind + slope + rev);
};
exports.default = CalculoController;

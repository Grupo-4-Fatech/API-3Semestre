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
const AeronaveModel_1 = __importDefault(require("../Models/AeronaveModel"));
const FlapModel_1 = __importDefault(require("../Models/FlapModel"));
const CalculoController = (0, express_1.default)();
CalculoController.post("/calcular", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var dados = req.body;
    console.log(dados);
    yield FlapModel_1.default.findOne({ raw: true,
        where: {
            flap: dados.Flap,
            ice: dados.Ice,
            aeronaves: dados.Modelo,
            runway_condicion: dados.RunwayCondicion
        } }).then((data) => __awaiter(void 0, void 0, void 0, function* () {
        yield AeronaveModel_1.default.findOne({ raw: true, where: { modelo_de_aeronave: dados.Modelo } }).then((dat) => {
            var calculo = calcular(data, dados, dat);
            console.log("resultado do calculo");
            console.log(calculo);
            res.json(calculo);
        });
    }));
}));
var calcular = function (dados, valores, referencia) {
    console.log("dadosssssssssssssssssssssssssss");
    console.log(dados);
    //PESO TONELADAS
    //ALTURA FEET
    //TEMPERATURA GRAUS
    //WIND KT (NÓS)
    //SLOPE PORCENTAGEM
    //REVERSOR UN
    var valorReferencia = dados.ref;
    var peso = 0;
    var altura = 0;
    var temp = 0;
    var wind = 0;
    var slope = 0;
    var rev = 0;
    //1== internacional
    if (valores.UnitOfMeasurement == 1) {
    }
    else {
        valores.Peso = valores.Peso / 2.205;
    }
    if (referencia.unidade_de_medida == 1) {
    }
    else {
        referencia.peso = referencia.peso / 2.205;
    }
    //VALORES DE PESO
    if (valores.Peso > referencia.peso) {
        peso = peso + (valores.Peso - referencia.peso) / referencia.peso_referencia * dados.above_weight;
    }
    else if (valores.Peso < referencia.peso) {
        peso = peso + (referencia.peso - valores.Peso) / referencia.peso_referencia * dados.below_weight;
    }
    //ALTURA
    altura = (dados.alt / referencia.altitude) * valores.Alt;
    //TEMPERATURA
    if (valores.Temp > referencia.isa) {
        temp = (dados.above_isa / referencia.temp_ref) * valores.Temp;
    }
    else if (valores.Temp < referencia.isa) {
        temp = (dados.below_isa / referencia.temp_ref) * valores.Temp;
    }
    //1 == HEADWIND
    //1 == TALLWIND
    if (valores.LikeWind == 1) {
        wind = (dados.head_wind / referencia.vento) * valores.Wind;
    }
    else if (valores.LikeWind == 2) {
        wind = (dados.tall_wind / referencia.vento) * valores.Wind;
    }
    if (referencia.slope == 0) {
        referencia.slope = 1;
    }
    //1 == UPHILL
    //2 == DOWNHILL
    if (valores.LikeSlope == 1) {
        slope = (dados.up_hill / referencia.slope) * valores.Slope;
    }
    else if (valores.LikeSlope == 2) {
        slope = (dados.down_hill / referencia.slope) * valores.Slope;
    }
    //REVERSOR
    rev = dados.rev * valores.Rev;
    //RESPOTA EM METROS
    console.log(dados);
    console.log(valores);
    console.log(referencia);
    console.log(valorReferencia);
    console.log("Peso: " + peso);
    console.log("Altura " + altura);
    console.log("Temperatura " + temp);
    console.log("Vento " + wind);
    console.log("Slop" + slope);
    console.log("Reversor " + rev);
    let resultado = valorReferencia + peso + altura + temp + wind + slope + rev;
    // if(valores.UnitOfMeasurement == 2){
    //     resultado = resultado / 3.281
    // }
    return Math.floor(resultado);
};
exports.default = CalculoController;

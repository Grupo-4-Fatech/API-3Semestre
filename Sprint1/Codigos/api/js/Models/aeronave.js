"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Aeronave {
    constructor(modelo_de_aeronave, motor, certificacao, peso, reversor, overspeed, flap_de_pouso) {
        this.modelo_de_aeronave = modelo_de_aeronave;
        this.motor = motor;
        this.certificacao = certificacao;
        this.peso = peso;
        this.reversor = reversor;
        this.overspeed = overspeed;
        this.flap_de_pouso = flap_de_pouso;
    }
}
exports.default = Aeronave;

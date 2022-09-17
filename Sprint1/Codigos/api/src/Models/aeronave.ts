import Conexao from "../Connection/conexao";

export default class Aeronave{
    public modelo_de_aeronave: string
    public motor: string
    public certificacao:string
    public peso: string
    public reversor: string
    public overspeed: string
    public flap_de_pouso: string
    constructor(modelo_de_aeronave: string, motor:string, certificacao:string, peso: string, reversor:string, overspeed:string, flap_de_pouso:string){
        this.modelo_de_aeronave = modelo_de_aeronave
        this.motor = motor
        this.certificacao = certificacao
        this.peso = peso
        this.reversor = reversor
        this.overspeed = overspeed
        this.flap_de_pouso = flap_de_pouso
    }
    
}
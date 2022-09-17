import Aeronave from "../Models/aeronave"

export default interface AeronaveInterface{
    salvar(Aeronave:Aeronave):boolean
    deletar(modelo_de_aeronave:string):boolean
    listar(): Array<Aeronave>
    editar(Aeronave:Aeronave):boolean
    buscarPorModelo_de_aeronave(modelo_de_aeronave:string): any
}
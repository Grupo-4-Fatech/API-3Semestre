import Usuario from "../Models/Usuario";

export default interface UsuarioInterface{
    salvar(usuario:Usuario):boolean
    deletar(email:string):boolean
    listar(): Array<Usuario>
    editar(usuario:Usuario):boolean
    buscarPorEmail(email:string): any
}
import Conexao from "../Connection/conexao";

export default class Usuario{
    public email:string
    public nome:string
    private senha:string
    constructor(email: string, nome:string, senha:string){
        this.email = email
        this.nome = nome
        this.senha = senha 

    }
    getSenha = ()=>{
        return this.senha
    }



}
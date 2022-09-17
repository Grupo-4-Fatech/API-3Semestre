import Conexao from "../Connection/conexao";

export default class Break{
    private id: number;
    public nome: string

    constructor(nome: string, id: number){
        this.nome = nome
        this.id = id
    }

    getId = ()=>{
        return this.id
    }

    
}
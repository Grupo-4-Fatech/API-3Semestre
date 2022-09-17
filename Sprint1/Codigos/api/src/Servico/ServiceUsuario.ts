import Conexao from "../Connection/conexao";
import UsuarioInterface from "../Interface/UsuarioInterface";
import Usuario from "../Models/Usuario";
const sequelize  = new Conexao()
const conexao = sequelize.conectar()
const UsuarioVM = conexao.define("usuarios", {
    email: {
        type: sequelize.Sequelize.STRING,
        primaryKey: true
        
    },
    nome:{
        type: sequelize.Sequelize.STRING,
        
    },
    senha: {
        type: sequelize.Sequelize.STRING
    },
    
    
})
export default  class UsuarioService implements UsuarioInterface{
    listaUsuarios!: Array<Usuario>
    usuario!: Usuario
    
    salvar(usuario:Usuario) : boolean{
        var sucesso = UsuarioVM.create({
            email: usuario.email,
            nome: usuario.nome,
            senha: usuario.getSenha()
        })

        if(sucesso){
            return true
        }else{
            return false
        }
        
    }
    deletar(email:string): boolean {
        var sucesso = UsuarioVM.destroy({
            where:{
                email: email
            }
        });
        if(sucesso){
            return true
        }else{
            return false
        }
    }

    listar(): Array<Usuario> {
       this.listaUsuarios = []
        var lista = UsuarioVM.findAll().then((data: any)=>{
            data.forEach((element: { email: string; nome: string; senha: string; }) => {
                var usuario = new Usuario(element.email, element.nome, element.senha);
                console.log(usuario.email + " " + usuario.nome + " " + usuario.getSenha() )
                this.listaUsuarios.push(usuario);
          })

        });
        return this.listaUsuarios;
    
    }
    
    
    editar(usuario:Usuario): boolean {
        var sucesso = UsuarioVM.update({
            nome:usuario.nome,
            senha: usuario.getSenha()
        },{
        where:{
            email: usuario.email
        }}).catch((e: any) => {
            console.log(e);
        });;
        if(sucesso){
            return true
        }else{
            return false
        }
    }
    async buscarPorEmail(email: string): Promise<Usuario> {
      return await UsuarioVM.findByPk(email,  { raw: true });
      
      
    }
    
        
    }
    
   
          
    




import Conexao from "../Connection/conexao";
import Break_typeInterface from "../Interface/Break_typeInterface";
import UsuarioInterface from "../Interface/UsuarioInterface";
import Break from "../Models/break";

const sequelize  = new Conexao()
const conexao = sequelize.conectar()
const Break_typeVM = conexao.define("breaks", {
    id: {
        type: sequelize.Sequelize.INT,
        primaryKey: true
        
    },
    nome:{
        type: sequelize.Sequelize.STRING,
        
    },    
})
export default  class Break_typeService implements Break_typeInterface{
    listaBreaks!: Array<Break>
    break!: Break
    
    async buscarPorId(id: number) {
        return await Break_typeVM.findByPk(id,  { raw: true });
    }
    
    
}
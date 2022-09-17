import Conexao from "../Connection/conexao"
import Breaking_modeInterface from "../Interface/Breaking_modeInterface"
import Break from "../Models/break"

const sequelize  = new Conexao()
const conexao = sequelize.conectar()
const Breaking_modeVM = conexao.define("breaks", {
    id: {
        type: sequelize.Sequelize.INT,
        primaryKey: true
        
    },
    nome:{
        type: sequelize.Sequelize.STRING,
        
    },    
})
export default  class Breaking_modeService implements Breaking_modeInterface{
    listaBreaks!: Array<Break>
    break!: Break
    
    async buscarPorId(id: number) {
        return await Breaking_modeVM.findByPk(id,  { raw: true });
    }
    
    
}
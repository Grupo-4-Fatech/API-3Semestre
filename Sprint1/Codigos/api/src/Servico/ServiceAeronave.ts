import Conexao from "../Connection/conexao"
import AeronaveInterface from "../Interface/AeronaveInterface"
import Aeronave from "../Models/aeronave"

const sequelize  = new Conexao()
const conexao = sequelize.conectar()
const AeronaveVM = conexao.define("aeronaves", {
    modelo_de_aeronave: {
        type: sequelize.Sequelize.STRING,
        primaryKey: true
        
    },
    motor:{
        type: sequelize.Sequelize.STRING,
        
    },
    certificacao: {
        type: sequelize.Sequelize.STRING
    },
    peso: {
        type: sequelize.Sequelize.STRING
    },
    reversor: {
        type: sequelize.Sequelize.STRING
    },
    overspeed: {
        type: sequelize.Sequelize.STRING
    },
    flap_de_pouso: {
        type: sequelize.Sequelize.STRING
    },
})
export default  class AeronaveService implements AeronaveInterface{
    listaAeronave!: Array<Aeronave>
    aeronave!: Aeronave
    salvar(Aeronave: Aeronave): boolean {
        var sucesso = AeronaveVM.create({
            modelo_de_aeronave: Aeronave.modelo_de_aeronave,
            motor: Aeronave.motor,
            certificacao: Aeronave.certificacao,
            peso: Aeronave.peso,
            reversor: Aeronave.reversor,
            overspeed: Aeronave.overspeed,
            flap_de_pouso: Aeronave.flap_de_pouso
        })
        if(sucesso){
            return true
        }else{
            return false
        }
    }
    deletar(modelo_de_aeronave: string): boolean {
        var sucesso = AeronaveVM.destroy({
            where:{
                modelo_de_aeronave: modelo_de_aeronave
            }
        });
        if(sucesso){
            return true
        }else{
            return false
        }
    }
    listar(): Aeronave[] {
        this.listaAeronave = []
        var lista = AeronaveVM.findAll().then((data: any)=>{
            data.forEach((element: { modelo_de_aeronave: string; motor: string; certificacao: string; peso: string; reversor: string, overspeed: string, flap_de_pouso: string  }) => {
                var aeronave = new Aeronave(element.modelo_de_aeronave, element.motor, element.certificacao, element.peso,element.reversor, element.overspeed, element.flap_de_pouso);
                console.log(aeronave.modelo_de_aeronave + " " + aeronave.motor + " " + aeronave.certificacao+ " " + aeronave.peso + " " + aeronave.reversor + " " + aeronave.overspeed + " " + aeronave.flap_de_pouso)
                this.listaAeronave.push(aeronave);
          })

        });
        return this.listaAeronave;
    }
    editar(Aeronave: Aeronave): boolean {
        var sucesso = AeronaveVM.update({
            motor:Aeronave.motor,
            certificacao: Aeronave.certificacao,
            peso: Aeronave.peso,
            reversor: Aeronave.reversor,
            overspeed: Aeronave.overspeed,
            flap_de_pouso: Aeronave.flap_de_pouso
        },{
        where:{
            mode_de_aeronave: Aeronave.modelo_de_aeronave
        }}).catch((e: any) => {
            console.log(e);
        });;
        if(sucesso){
            return true
        }else{
            return false
        }
    }
    async buscarPorModelo_de_aeronave(modelo_de_aeronave: string): Promise<Aeronave> {
        return await AeronaveVM.findByPk(modelo_de_aeronave, {raw:true});
    }
    
}
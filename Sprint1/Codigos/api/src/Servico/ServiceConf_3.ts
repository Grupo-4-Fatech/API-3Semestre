import Conexao from "../Connection/conexao";
import Conf_3Interface from "../Interface/Conf_3Interface";
import Conf from "../Models/conf";

const sequelize  = new Conexao()
const conexao = sequelize.conectar()
const Conf_3VM = conexao.define("confs", {
    id: {
        type: sequelize.Sequelize.INT,
        primaryKey: true
        
    },
    brk_conf:{
        type: sequelize.Sequelize.INT,
        foreignKey: true
        
    },
    ref:{
        type: sequelize.Sequelize.INT,

    },
    weight_below:{
        type: sequelize.Sequelize.SMALLINT,

    },
    weight_above:{
        type: sequelize.Sequelize.SMALLINT,

    },
    spd:{
        type: sequelize.Sequelize.SMALLINT,

    },
    alt:{
        type: sequelize.Sequelize.SMALLINT,

    },
    wind:{
        type: sequelize.Sequelize.SMALLINT,

    },
    temp:{
        type: sequelize.Sequelize.SMALLINT,

    },
    slope:{
        type: sequelize.Sequelize.SMALLINT,

    },
    rev:{
        type: sequelize.Sequelize.SMALLINT,

    },
})

export default  class Conf_3Service implements Conf_3Interface{
    listaConfs!: Array<Conf>
    conf!: Conf

    /*listar(): Conf[] {
        this.listaConfs = []
        var lista = Conf_3VM.findAll().then((data: any)=>{
            data.forEach((element: { id: number; brk_conf: number ; ref: number; weight_below: number; weight_above: number, spd: number, alt:number, wind: number, temp: number, slope:number, rev: number  }) => {
                var conf = new Conf(element.id, element.brk_conf, element.ref, element.weight_below,element.weight_above, element.spd, element.alt,element.wind, element.temp, element.slope, element.rev );
                console.log(conf.Id + " " + conf.Brk_conf + " " + conf.Ref+ " " + conf.weight_below + " " + conf.weight_above + " " + conf.spd + " " + conf.alt+""+ conf.wind+""+conf.temp+""+conf.temp+""+conf.slope+""+conf.rev)
                this.listaConfs.push(conf);
          })

        });
        return this.listaConfs;
    }*/
    async buscarPorId(id: number) {
        return await Conf_3VM.findByPk(id,  { raw: true });
    }

    
    
    
}
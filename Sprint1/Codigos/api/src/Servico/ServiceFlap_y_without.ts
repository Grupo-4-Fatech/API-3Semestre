import Conexao from "../Connection/conexao";
import Flap_y_withoutInterface from "../Interface/Flap_y_withoutInterface";

import Flap from "../Models/Flap";

const sequelize  = new Conexao()
const conexao = sequelize.conectar()
const Flap_y_withoutVM = conexao.define("flaps", {

    id: {
        type: sequelize.Sequelize.INT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true       
    },
    brk_conf:{
        type: sequelize.Sequelize.INT,
        allowNull: false,
        foreignKey: true
    },
    ref:{
        type: sequelize.Sequelize.INT,
        allowNull: false,
    },
    weight_below:{
        type: sequelize.Sequelize.INT,
        allowNull: false,
    },
    weight_above:{
        type: sequelize.Sequelize.INT,
        allowNull: false,
    },
    alt:{
        type: sequelize.Sequelize.INT,
        allowNull: false,
    },
    temp_below:{
        type: sequelize.Sequelize.INT,
        allowNull: false,
    },
    temp_above:{
        type: sequelize.Sequelize.INT,
        allowNull: false,
    },
    wind_head:{
        type: sequelize.Sequelize.INT,
        allowNull: false,
    },
    wind_tail:{
        type: sequelize.Sequelize.INT,
        allowNull: false,
    },
    slope_uphill:{
        type: sequelize.Sequelize.INT,
        allowNull: false,
    },
    slope_downhill:{
        type: sequelize.Sequelize.INT,
        allowNull: false,
    },
    vap:{
        type: sequelize.Sequelize.INT,
        allowNull: false,
    },
    rev:{
        type: sequelize.Sequelize.INT,
        allowNull: false,
    },   
    
})
export default class Flap_y_withoutService implements Flap_y_withoutInterface {
    listaFlaps!: Array<Flap>
    flap!: Flap
    

    async buscarPorId(id: number): Promise<Flap> {
      return await Flap_y_withoutVM.findByPk(id,  { raw: true });
      
      
    }
        
    }
import conexao from "../Conexao/conexao";
const sequelize = require('sequelize')
const AeronaveModel = conexao.define("aeronaves",{
    modelo_de_aeronave:{
        type: sequelize.STRING,
        primaryKey: true
    },
    unidade_de_medida:{
        type: sequelize.Sequelize.INTEGER
    },
    certificacao:{
        type: sequelize.Sequelize.STRING
    },
    motor:{
        type: sequelize.Sequelize.STRING
    },
    peso:{
        type: sequelize.Sequelize.INTEGER
    },
    reversor:{
        type: sequelize.Sequelize.INTEGER
    },
    landing_flap:{
        type: sequelize.Sequelize.STRING
    },
    peso_referencia:{
        type: sequelize.Sequelize.INTEGER
    },
    altitude:{
        type: sequelize.Sequelize.INTEGER
    },
    isa:{
        type: sequelize.Sequelize.INTEGER
    },
    vento:{
        type: sequelize.Sequelize.INTEGER
    },
    peso_max:{
        type: sequelize.Sequelize.INTEGER
    },
    peso_min:{
        type: sequelize.Sequelize.INTEGER
    },
    owerweight:{
        type: sequelize.Sequelize.INTEGER
    },
    overspeed:{
        type: sequelize.Sequelize.INTEGER
    },
    slope:{
        type: sequelize.Sequelize.INTEGER
    }




})

export default AeronaveModel

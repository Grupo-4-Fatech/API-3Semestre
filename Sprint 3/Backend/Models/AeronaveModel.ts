import conexao from "../Conexao/conexao";
const sequelize = require('sequelize')
const AeronaveModel = conexao.define("aeronaves",{
    modelo_de_aeronave:{
        type: sequelize.STRING,
        primaryKey: true
    },
    motor:{
        type: sequelize.Sequelize.STRING
    },
    certificacao:{
        type: sequelize.Sequelize.STRING
    },
    landing_flap:{
        type: sequelize.Sequelize.STRING
    },
    reversor:{
        type: sequelize.Sequelize.INTEGER
    },
    peso:{
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
    overspeed_max:{
        type: sequelize.Sequelize.INTEGER
    },
    overspeed_min:{
        type: sequelize.Sequelize.INTEGER
    },
    vento_max:{
        type: sequelize.Sequelize.INTEGER
    },
    vento_min:{
        type: sequelize.Sequelize.INTEGER
    },
    isa_max:{
        type: sequelize.Sequelize.INTEGER
    },
    isa_min:{
        type: sequelize.Sequelize.INTEGER
    }

})

export default AeronaveModel

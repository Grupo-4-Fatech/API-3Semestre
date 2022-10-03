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
    peso:{
        type: sequelize.Sequelize.INTEGER
    },
    reversor:{
        type: sequelize.Sequelize.INTEGER
    }
    // overspeed:{
    //     type: sequelize.Sequelize.STRING
    // },
    // flap_de_pouso:{
    //     type: sequelize.Sequelize.INTEGER
    // }
})

export default AeronaveModel

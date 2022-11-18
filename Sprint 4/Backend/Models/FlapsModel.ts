import conexao from "../Conexao/conexao";
const sequelize = require('sequelize')
const FlapsModel = conexao.define("flaps", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    flap:{
        type: sequelize.Sequelize.STRING
        
    },
    aeronave: {
        type: sequelize.Sequelize.STRING
    }
  
});

export default FlapsModel;
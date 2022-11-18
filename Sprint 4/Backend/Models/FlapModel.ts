import conexao from "../Conexao/conexao";
const sequelize = require('sequelize')
const FlapModel = conexao.define("cadastro_flap", {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        
    },
    aeronaves:{
        type: sequelize.Sequelize.STRING
        
    },
    udm:{
        type: sequelize.Sequelize.INTEGER
        
    },
    flap:{
        type: sequelize.Sequelize.STRING
        
    },
    ice: {
        type: sequelize.Sequelize.INTEGER
    },
    runway_condicion: {
        type: sequelize.Sequelize.INTEGER
    },
    ref: {
        type: sequelize.Sequelize.INTEGER
    },
    below_weight: {
        type: sequelize.Sequelize.INTEGER
    },
    above_weight: {
        type: sequelize.Sequelize.INTEGER
    },
    alt: {
        type: sequelize.Sequelize.INTEGER
    },
    below_isa: {
        type: sequelize.Sequelize.INTEGER
    },
    above_isa: {
        type: sequelize.Sequelize.INTEGER
    },
    head_wind: {
        type: sequelize.Sequelize.INTEGER
    },
    tall_wind: {
        type: sequelize.Sequelize.INTEGER
    },
    up_hill: {
        type: sequelize.Sequelize.INTEGER
    },
    down_hill: {
        type: sequelize.Sequelize.INTEGER
    },
    vap: {
        type: sequelize.Sequelize.INTEGER
    },
    rev: {
        type: sequelize.Sequelize.INTEGER
    }
    
});

export default FlapModel;
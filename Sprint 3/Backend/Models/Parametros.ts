import conexao from "../Conexao/conexao";
const sequelize = require('sequelize')
const ParametrosModel = conexao.define("parametros", {
    Id: {
        type: sequelize.INTEGER,
        primaryKey: true
        
    },
    Udm:{
        type: sequelize.Sequelize.INTEGER
        
    },
    Flap:{
        type: sequelize.Sequelize.INTEGER
        
    },
    Ice: {
        type: sequelize.Sequelize.BOOLEAN
    },
    RunwayCondicion: {
        type: sequelize.Sequelize.INTEGER
    },
    Ref: {
        type: sequelize.Sequelize.INTEGER
    },
    BelowWeight: {
        type: sequelize.Sequelize.INTEGER
    },
    AboveWeight: {
        type: sequelize.Sequelize.INTEGER
    },
    Alt: {
        type: sequelize.Sequelize.INTEGER
    },
    BelowISA: {
        type: sequelize.Sequelize.INTEGER
    },
    AboveISA: {
        type: sequelize.Sequelize.INTEGER
    },
    HeadWind: {
        type: sequelize.Sequelize.INTEGER
    },
    TallWind: {
        type: sequelize.Sequelize.INTEGER
    },
    UpHill: {
        type: sequelize.Sequelize.INTEGER
    },
    DownHill: {
        type: sequelize.Sequelize.INTEGER
    },
    Vap: {
        type: sequelize.Sequelize.INTEGER
    },
    Rev: {
        type: sequelize.Sequelize.INTEGER
    }
    
});

export default ParametrosModel;
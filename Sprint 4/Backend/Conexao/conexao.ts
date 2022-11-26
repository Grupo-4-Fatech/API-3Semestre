import { Sequelize } from 'sequelize';

 const conexao = new Sequelize('api', 'root', 'Fatec123', {
     host: 'localhost',
     dialect: 'mysql',
     define: {
         timestamps: false
     }
 });

 export default conexao;
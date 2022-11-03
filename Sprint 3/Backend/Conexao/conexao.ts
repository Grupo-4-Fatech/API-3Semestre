import { Sequelize } from 'sequelize';

 const conexao = new Sequelize('api', 'root', 'Ton369811', {
     host: 'localhost',
     dialect: 'mysql',
     define: {
         timestamps: false
     }
 });

 export default conexao;
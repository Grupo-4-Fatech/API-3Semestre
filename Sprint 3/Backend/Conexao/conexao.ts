import { Sequelize } from 'sequelize';

 const conexao = new Sequelize('api1', 'root', 'sa1905@#$', {
     host: 'localhost',
     dialect: 'mysql',
     define: {
         timestamps: false
     }
 });

 export default conexao;
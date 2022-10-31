import { Sequelize } from 'sequelize';

 const conexao = new Sequelize('api2', 'root', 'fatec', {
     host: 'localhost',
     dialect: 'mysql',
     define: {
         timestamps: false
     }
 });

 export default conexao;
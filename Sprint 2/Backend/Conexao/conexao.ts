import { Sequelize } from 'sequelize';

 const conexao = new Sequelize('ton', 'root', '771823', {
     host: 'localhost',
     dialect: 'mysql',
     define: {
         timestamps: false
     }
 });

 export default conexao;
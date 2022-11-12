import { Sequelize } from 'sequelize';

 const conexao = new Sequelize('api', 'root', 'antoniomarcelo', {
     host: 'localhost',
     dialect: 'mysql',
     define: {
         timestamps: false
     }
 });

 export default conexao;
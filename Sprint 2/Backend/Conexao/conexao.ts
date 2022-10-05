import { Sequelize } from 'sequelize';
 const conexao = new Sequelize('api', 'root', '36558891Biel', {
     host: 'localhost',
     dialect: 'mysql',
     define: {
         timestamps: false
     }
 });

 export default conexao;
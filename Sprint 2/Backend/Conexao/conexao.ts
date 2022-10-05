import { Sequelize } from 'sequelize';
<<<<<<< HEAD
 const conexao = new Sequelize('api', 'root', '36558891Biel', {
=======
 const conexao = new Sequelize('api', 'root', 'fatec', {
>>>>>>> 087b2d5c0c82de82260debe0aec42b32ba3460a2
     host: 'localhost',
     dialect: 'mysql',
     define: {
         timestamps: false
     }
 });

 export default conexao;
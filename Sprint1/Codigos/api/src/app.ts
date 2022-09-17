import UsuarioModel from "./Servico/ServiceUsuario";
import Usuario from "./Models/Usuario";
import UsuarioService from "./Servico/ServiceUsuario";

var everton = new Usuario("teste@teste2", "testeUpdate", "teste123")

var _serviceUsuario = new UsuarioService();
// var sucesso = _serviceUsuario.salvar(everton);
// console.log(sucesso);
//var dados = _serviceUsuario.listar();
var salvar:boolean = true
try{
    salvar =  _serviceUsuario.salvar(everton);

}catch(error) { 
    
    console.log(error) }
    


console.log(salvar)
var usuario = _serviceUsuario.buscarPorEmail("teste@teste")
console.log(usuario)
usuario == null? console.log("Not Found"):  console.log(usuario.then(data => console.log(data)));



// var http = require('http');
// var fs = require('fs');

// const PORT=8080; 

// fs.readFile('../API-3SEM/front', function (err:string, html:string) {

//     if (err) throw err;    

//     http.createServer(function(request:Request, response:any) {  
//         response.writeHeader(200, {"Content-Type": "text/html"});  
//         response.write(html);  
//         response.end();  
//     }).listen(PORT);
// });






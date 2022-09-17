"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = __importDefault(require("./Models/Usuario"));
const ServiceUsuario_1 = __importDefault(require("./Servico/ServiceUsuario"));
var everton = new Usuario_1.default("teste@teste2", "testeUpdate", "teste123");
var _serviceUsuario = new ServiceUsuario_1.default();
// var sucesso = _serviceUsuario.salvar(everton);
// console.log(sucesso);
//var dados = _serviceUsuario.listar();
var salvar = true;
try {
    salvar = _serviceUsuario.salvar(everton);
}
catch (error) {
    console.log("entrou");
    console.log(error);
}
console.log(salvar);
var usuario = _serviceUsuario.buscarPorEmail("teste@teste");
console.log(usuario);
usuario == null ? console.log("Not Found") : console.log(usuario.then(data => console.log(data)));
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

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const conexao_1 = __importDefault(require("./Conexao/conexao"));
const UsuarioController_1 = __importDefault(require("./Controller/UsuarioController"));
const LoginController_1 = __importDefault(require("./Controller/LoginController"));
const CalculoController_1 = __importDefault(require("./Controller/CalculoController"));
const AeronaveController_1 = __importDefault(require("./Controller/AeronaveController"));
const FlapController_1 = __importDefault(require("./Controller/FlapController"));
const app = (0, express_1.default)();
const port = 5000;
app.locals.email = "teste";
app.use(express_1.default.json());
app.get('/', (_req, _res) => {
    _res.send("TypeScript With Expresss");
});
app.get('/banco', (_req, _res) => {
    conexao_1.default.authenticate().then(function () {
        _res.send("Conectado com sucesso");
    }).catch(function (erro) {
        _res.send("Falha ao se conectar:" + erro);
    });
});
app.use(UsuarioController_1.default);
app.use(LoginController_1.default);
app.use(CalculoController_1.default);
app.use(AeronaveController_1.default);
app.use(FlapController_1.default);
app.listen(port, () => {
    console.log(`TypeScript with Express
         http://localhost:${port}/`);
});
exports.default = app;

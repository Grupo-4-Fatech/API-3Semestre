<p align="center">
<h1 align="center"> Projeto Embraer </h1>

<h2> 📑 Manual do Usuário </h2>
  
Para executar a aplicação, certifique-se de ter instalado o <b>NodeJs</b> em seu computador:
- Faça o clone do repositório:

```
git clone https://github.com/Grupo-4-Fatech/API-3Semestre
```
- Na pasta raiz do projeto, digite:
```
cd "Sprint 4"
```
- Agora instale as dependências do projeto:
```
cd front
npm install
cd ..
cd Backend
npm install
```
<h3> ⛏️ Banco</h3>

- Instalar o <a href="https://dev.mysql.com/downloads/workbench/">MYSQL Workbench</a>.

Após a instalação:
- Clique na conexão "Local instance"
- Na aba <i>Server</i>, clique em <i>Data Import</i>
- Em seguida, clique no checkbox <i>Import from Self-Contained File</i>
- Importe o arquivo api.sql, localizado em ```Sprint 4/Backend/api.sql```
- Em <i>Default Target Schema</i>, crie um novo schema chamado "api".
- Clique na aba "Import Progress", e por fim "Start Import"

- Na pasta Backend/Conexao, no arquivo conexao.ts, mude a senha para a mesma senha que você cadastrou no seu Workbench para o usuário root.
```
const conexao = new Sequelize('api', 'root', 'Ton369811', {
```
- Em seguida, execute o seguinte comando para compilar:
```
npx tsc ou tsc
```
- Execute a aplicação pelo seguinte comando:
```
npm run dev
```

<h3> ⛏️ Login</h3>
- Para fazer login, no projeto existem dois tipos de usuários: Administrador e Cliente. Cada usuário tem permissões diferentes.

- Para um primeiro login, já temos um modelo de usuário que pode ser usado:

```
Administrador
Login: Admin@Admin
Senha: Admin123
```

```
Cliente
Login: cliente2@cliente
Senha: Teste123
```
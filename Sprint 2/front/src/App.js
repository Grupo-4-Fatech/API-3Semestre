
// import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import CadastroAeronave from './pages/cadastro-aeronave/cadastro-aeronave';
import CadastroUsuario from './pages/Cadastro-usuario/cadastro-usuario';
import Calculo from './pages/calculo/calculo';
import Home from './pages/home/home';
import Login from './pages/login/login'
import 'semantic-ui-css/semantic.min.css'
import ConsDelUsu from './pages/consulta-deletarUsu/con-delUsu';
import AlterarUsu from './pages/Alterar-usuario/alterarUsu';


function App() {
  
  return (
    <div className="App">
      <Router>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/Cadastro-Aeronave" element={<CadastroAeronave />} />
            <Route exact path="/Cadastro-usuario" element={<CadastroUsuario />} />
            <Route exact path="/Calculo" element={<Calculo />} />
            <Route exact path="/Consulta" element={<ConsDelUsu/>} />
            <Route exact path="/Alterar-usuario" element={<AlterarUsu/>}/>
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

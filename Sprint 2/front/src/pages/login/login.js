import InputLogin from "../../componentes/inputLogin/inputLogin-Cadastro"
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import "./login.css";
import Botao from "../../componentes/botao/botao";


const Login = () => {
    var handleLogin = function () {
        var dados = {}
        dados.email = document.getElementById('email').value;
        dados.senha = document.getElementById('senha').value

        fetch("/Logar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dados)
        }).then((resposta) => resposta.json()).then((data) => {

            if (data.ok) {
                if (data.usuario.TipoUsuario === 2) {
                    window.location.href = '/home'
                } else {
                    window.location.href = '/Calculo'
                }

            } else {
                alert(data.Mensagem)
            }
        })
    }
    return (
        <div id="formL" className="corpoL">
            <form action="">
                <h2 className="titleL">Login</h2>
                <InputLogin text="Email " id="email" placeholder="Email" type="email" icon={faEnvelope} />
                <InputLogin text="Password" id="senha" placeholder="Password" type="password" icon={faLock} />
                <Botao acao={handleLogin}>Login</Botao>

            </form>

        </div>
    );
}

export default Login;
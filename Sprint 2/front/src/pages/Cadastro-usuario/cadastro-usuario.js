import InputLogin from "../../componentes/inputLogin/inputLogin-Cadastro"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import "./cadastro_usuario.css"
import { faEnvelope, faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons'
const Swal = require('sweetalert2')

function valSenha(e) {
    var senha = document.getElementById("senha").value;
    var email = document.getElementById("email").value;
    // if (email !== )
    if (senha.length < 8) {
        return false
    }
    return true
}

const CadastroUsuario = () => {
    var handleCadastroUsuario = function (e) {
        e.preventDefault();
        var validarSenha = valSenha();
        console.log(validarSenha);
        if (validarSenha) {
            var dados = {}
            dados.email = document.getElementById('email').value;
            dados.nome = document.getElementById('username').value;
            dados.senha = document.getElementById('senha').value
            if (document.getElementById('dot-1').checked) {
                dados.tipoUsuario = 1
            } else if (document.getElementById('dot-2').checked) {
                dados.tipoUsuario = 2
            }
            console.log(dados)
            fetch("/CadastrarUsuario", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(dados)
            }).then((resposta) => resposta.json()).then((data) => {
                // alert(data.mensagem)
                Swal.fire({
                    title: data.ok ? 'User successfully registered' : "E-mail already registered",
                    icon: data.ok ? 'success' : "erro",
                }).then((result) => {
                    if (result.isConfirmed && data.ok) {
                        window.location.href = '/home';
                    }
                })
                // if (data.ok) {
                //     window.location.href = '/home';
                // }
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Incorrect password',
                text: 'Cannot recive less eight characters',
            })
        }
    }
    return (
        <div id="form">
            <a href="./home"><FontAwesomeIcon icon={faArrowLeft} /></a>
            <form action="">
                <h2 className="titulo">Register Users</h2>
                <InputLogin text="Name" id="username" placeholder="Enter username" type="text" icon={faUserCircle} />
                <InputLogin text="Email" id="email" placeholder="Enter email" type="text" icon={faEnvelope} />
                <InputLogin min="8" text="Password" id="senha" placeholder="Enter password" type="password" icon={faLock} />

                <div className="Reversor-details">
                    <input type="radio" name="tipo-usuario" id="dot-1" />
                    <input type="radio" name="tipo-usuario" id="dot-2" />
                    <span className="Reversor-title">Type</span>

                    <div className="category">

                        <label for="dot-1">
                            <span className="dot one" ></span>
                            <span className="reversor">Client&nbsp;&nbsp;</span>
                        </label>

                        <label for="dot-2">
                            <span className="dot two" ></span>
                            <span className="reversor">Administrator</span>
                        </label>

                    </div>

                </div>

                <div id="btn">
                    <button type="submit" onClick={handleCadastroUsuario} >Register</button>
                </div>
            </form>

        </div>

    );
}

export default CadastroUsuario;
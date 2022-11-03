import React from 'react';
import InputLogin from "../../componentes/inputLogin/inputLogin-Cadastro"
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import "./login.css";
import Botao from "../../componentes/botao/botao";
const Swal = require('sweetalert2')


function validarCampos (e){
    const email = document.getElementById('email')
    const senha = document.getElementById('senha')
    const campos = [email,senha]
    let Evalido = true 
    for (var campo of campos){
        if (campo.value ===""){
            Evalido = false
        }
    }return Evalido
}



const Login = () => {
    var handleLogin = function () {
        // if (validarCampos){
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Fields cannot be empty',

        //     })
        //     return
        // }
        var dados = {}
        dados.email = document.getElementById('email').value;
        dados.senha = document.getElementById('senha').value
        console.log(dados)
        fetch("/Logar", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dados)
        }).then((resposta) => resposta.json()).then((data) => {

            if (data.ok) {
                if (data.usuario.tipo_usuario === 2) {
                    window.location.href = '/home'
                } else {
                    window.location.href = '/Calculo-Cliente'
                }

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Incorrect login',
                    text: 'Does not match Login and Password',
                })
                // alert(data.Mensagem)
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
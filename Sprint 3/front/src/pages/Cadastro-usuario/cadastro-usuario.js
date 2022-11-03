import React, { useState } from 'react';
import InputLogin from "../../componentes/inputLogin/inputLogin-Cadastro"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Logout from '../../componentes/logout/logout';
const Swal = require('sweetalert2')

function valSenha(senha) {
    if (senha.length < 8) {
        return false
    }
    return true
}
function validarEmail(email) {
    const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+?$/i
    return emailRegex.test(email)

}
function validarFieldSenha(senha) {
    if (senha === null) {
        return false
    }
    if (senha === "") {
        return false
    }
    return true
}
function validarFieldName(name) {
    if (name === null) {
        return false
    }
    if (name === "") {
        return false
    } return true
}
function validarFieldEmail(email) {
    if (email === null) {
        return false
    }
    if (email === "") {
        return false
    } return true
}


const CadastroUsuario = () => {
    var handleCadastroUsuario = function (e) {
        e.preventDefault();
        var dados = {}
        dados.email = document.getElementById('email').value;
        dados.nome = document.getElementById('username').value;
        dados.senha = document.getElementById('senha').value
        if (document.getElementById('dot-1').checked) {
            dados.tipoUsuario = 1
        } else if (document.getElementById('dot-2').checked) {
            dados.tipoUsuario = 2
        }
        console.log("omg", e.target.value);

        if (!validarFieldName(dados.nome)) {
            Swal.fire({
                icon: 'error',
                title: 'Name cannot be empty',
                text: '',
            })
            return true
        }
        if (!validarFieldEmail(dados.email)) {
            Swal.fire({
                icon: 'error',
                title: 'Email cannot be empty',
                text: '',
            })
            return true
        }
        if (!validarEmail(dados.email)) {
            Swal.fire({
                icon: 'error',
                title: 'Incorrect email',
                text: 'Must have @ and .com',
            })
            return true
        }
        var senha = validarFieldName(dados.senha)
        console.log(senha);
        if (!validarFieldSenha(dados.senha)) {
            Swal.fire({
                icon: 'error',
                title: 'Password cannot be empty',
                text: '',
            })
            return true
        }
        if (!valSenha(dados.senha)) {
            Swal.fire({
                icon: 'error',
                title: 'Incorrect password',
                text: 'Cannot recive less eight characters',
            })
            return true
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


    }
    return (
        <div id="form">
            <Logout></Logout>
            <a href="./home"><FontAwesomeIcon icon={faArrowLeft} /></a>
            <form action="">
                <h2 className="titulo">Register Users</h2>
                <InputLogin text="Name" id="username" placeholder="Enter rname" type="text" icon={faUserCircle} />
                <InputLogin text="Email" id="email" placeholder="Enter email" type="text" icon={faEnvelope} />
                <InputLogin min="8" text="Password" id="senha" placeholder="Enter password" type="password" icon={faLock} />

                <div className="Reversor-details">
                    <input type="radio" name="tipo-usuario" id="dot-1" value="1" defaultChecked />
                    <input type="radio" name="tipo-usuario" id="dot-2" value="2" />
                    <span className="Reversor-title">Type</span>

                    <div className="category">

                        <label for="dot-1">
                            <span className="dot one" value="1"></span>
                            <span className="reversor" >Client&nbsp;&nbsp;</span>
                        </label>

                        <label for="dot-2">
                            <span className="dot two" value="2"></span>
                            <span className="reversor" >Administrator</span>
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
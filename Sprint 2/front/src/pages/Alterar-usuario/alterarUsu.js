import React from 'react';
import InputLogin from "../../componentes/inputLogin/inputLogin-Cadastro"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import "./alterarUsu.css"
import { faEnvelope, faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const AtualizarUsuario = () => {
    var handleAtualizarUsuario = function (e) {
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
        console.log(dados)
        fetch("/AtualizarUsuario", {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dados)
        }).then((resposta) => resposta.json()).then((data) => {
            alert(data.mensagem)
            if (data.ok) {
                window.location.href = '/Consulta'; 
            }
        })
    }


    return (
        <div id="form">
            <a href="./Consulta"><FontAwesomeIcon icon={faArrowLeft} /></a>
            <form action="">
                <h2 className="titulo">Alter Users</h2>
                <InputLogin text="Name" id="username" placeholder="Enter name" type="text" icon={faUserCircle} />
                <InputLogin text="Email" id="email" placeholder="Enter email" type="text" icon={faEnvelope} />
                <InputLogin min="8" text="Password" id="senha" placeholder="Enter password" type="password" icon={faLock} />
                {/* <InputLogin min="8" text="Confirm password" id="senha" placeholder="Repeat password" type="password" icon={faLock} /> */}


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
                <button type="submit" onClick={handleAtualizarUsuario}>Alter</button>
                </div>
            </form>

        </div>

    );
}

export default AtualizarUsuario;
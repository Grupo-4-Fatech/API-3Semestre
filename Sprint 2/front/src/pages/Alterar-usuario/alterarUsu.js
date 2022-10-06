import InputLogin from "../../componentes/inputLogin/inputLogin-Cadastro"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import "./alterarUsu.css"
import { faEnvelope, faLock, faUserCircle } from '@fortawesome/free-solid-svg-icons'
// const Swal = require('sweetalert2')

// function valSenha(e) {
//     var senha = document.getElementById("senha").value;
//     if (senha.length < 8) {
//         return false
//     }
//     return true
// }

const AlterarUsu = () => {
    return (
        <div id="form">
            <a href="./Consulta"><FontAwesomeIcon icon={faArrowLeft} /></a>
            <form action="">
                <h2 className="titulo">Alter Users</h2>
                <InputLogin text="Name" id="username" placeholder="" type="text" icon={faUserCircle} />
                <InputLogin text="Email" id="email" placeholder="Enter email" type="text" icon={faEnvelope} />
                <InputLogin min="8" text="Password" id="senha" placeholder="Enter password" type="password" icon={faLock} />
                <InputLogin min="8" text="Confirm password" id="senha" placeholder="Repeat password" type="password" icon={faLock} />


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
                    <button type="submit">Alter</button>
                </div>
            </form>

        </div>

    );
}

export default AlterarUsu;
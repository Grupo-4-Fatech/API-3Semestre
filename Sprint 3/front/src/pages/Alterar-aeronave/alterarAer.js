import React from 'react';
import "./alterarAer.css"
import InputCadastros from "../../componentes/inputCadastros/inputCadastro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlane} from '@fortawesome/free-solid-svg-icons'


const atualizarAeronave = () => {
    var handleAtualizarAeronave = function (e) {
        e.preventDefault();
        var dados = {}
        dados.modelo_de_aeronave = document.getElementById('Modelo-de-aeronave1').value;
        dados.motor = document.getElementById('Motor1').value
        dados.certificacao = document.getElementById('Certificacao1').value
        dados.peso = document.getElementById('Peso1').value
        dados.reversor = document.getElementById('Reversor1').value
        // dados.overspeed = document.getElementById('Overspeed').value
        // dados.flap_de_pouso = document.getElementById('Flap de pouso').value

        //  if(document.getElementById('dot-1').checked){
        //      dados.sei n  = 1
        //  }else if(document.getElementById('dot-2').checked){
        //      dados.sei n  = 2
        //  }


        console.log(dados)
        fetch("/AtualizarAeronave", {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dados)
        }).then((resposta) => resposta.json()).then((data) => {
            console.log(data)
            alert(data.mensagem)
            if (data.ok) {
                window.location.href = '/home';
            }
        })
    }
    var string = window.location.href;
    string = string.substring(window.location.href.indexOf("Modelo_de_aeronave=")+19, string.length);
    fetch("/BuscarAeronave" +"?modelo_de_aeronave=" +string, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        
        }).then((resposta) => resposta.json()).then((data) => {
        
        document.getElementById('Modelo-de-aeronave1').value = data.modelo_de_aeronave
       
        
        });
    return ( 

        <div className="container">  
        {/* <a href="./home"><FontAwesomeIcon icon={faArrowLeft}/></a>       */}
        <div className="titulo">Alter Aircraft</div>
        <FontAwesomeIcon icon={faPlane}/>
        <form action="#">
            <div className="detalhes-aeronave">
                <InputCadastros id="Modelo-de-aeronave1" type="text" placeholder="Enter the Model">Aircraft Model</InputCadastros>
                <InputCadastros id="Motor1" type="text" placeholder="Enter the engine">Motor</InputCadastros>
                <InputCadastros id="Certificacao1" type="text" placeholder="Enter the certification">Certification</InputCadastros>
                <InputCadastros min="0" id="Peso1" type="number" placeholder="Enter the weight">Reference weight</InputCadastros>
                <InputCadastros min="0" id="Reversor1" type="number" placeholder="Enter the reverser" >Reverser</InputCadastros>

            </div>

            {/* <div className="Reversor-details">
                <input type="radio" name="Reversor" id="dot-1"/>
                <input type="radio" name="Reversor" id="dot-2"/>
                <span className="Reversor-title">Reversor</span>

                <div className="category">

                    <label for="dot-1">
                        <span className="dot one"></span>
                        <span className="reversor">Usa reversor</span>
                    </label>

                    <label for="dot-2">
                        <span className="dot two"></span>
                        <span className="reversor">Não usa reversor</span>
                    </label>

                </div>

            </div> */}
                <div id="btn">
                    <button type="submit" onClick={handleAtualizarAeronave}>Register</button>
            </div>
        </form>

    </div>

     );
}
 
export default atualizarAeronave
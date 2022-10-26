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
        // dados.landing_flap = document.getElementById('LF').value
        dados.peso_max = document.getElementById('pmax').value 
        dados.peso_min = document.getElementById("pmin").value
        dados.owerweight = document.getElementById("owerweicght").value
        dados.overspeed_max = document.getElementById("owermax").value
        dados.overspeed_min = document.getElementById("owermin").value
        dados.vento_max = document.getElementById("ventomax").value
        dados.vento_min = document.getElementById("ventommin").value
        dados.isa_max = document.getElementById("isamax").value
        dados.isa_min = document.getElementById("isamin").value
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
        document.getElementById("Motor1").value = data.motor
        document.getElementById("Certificacao1").value = data.certificacao
        document.getElementById("Peso1").value = data.peso
        document.getElementById("Reversor1").value = data.reversor
        // document.getElementById("LF").value = data.landing_flap
        document.getElementById("pmax").value = data.peso_max
        document.getElementById("pmin").value = data.peso_min
        document.getElementById("owerweicght").value = data.owerweight
        document.getElementById("owermax").value = data.overspeed_max
        document.getElementById("owermin").value = data.overspeed_min
        document.getElementById("ventomax").value = data.vento_max
        document.getElementById("ventommin").value = data.vento_min
        document.getElementById("isamax").value = data.isa_max
        document.getElementById("isamin").value = data.isa_min

       
        
        });
    return ( 

        <div className="container">  
        {/* <a href="./home"><FontAwesomeIcon icon={faArrowLeft}/></a>       */}
        <div className="titulo">Consult Aircraft</div>
        <FontAwesomeIcon icon={faPlane}/>
        <form action="#">
            <div className="detalhes-aeronave">
                <InputCadastros id="Modelo-de-aeronave1" type="text" placeholder="Enter the Model">Aircraft Model</InputCadastros>
                <InputCadastros id="Motor1" type="text" placeholder="Enter the engine">Motor</InputCadastros>
                <InputCadastros id="Certificacao1" type="text" placeholder="Enter the certification">Certification</InputCadastros>
                <InputCadastros min="0" id="Peso1" type="number" placeholder="Enter the weight">Reference weight</InputCadastros>
                <InputCadastros min="0" id="Reversor1" type="number" placeholder="Enter the reverser" >Reverser</InputCadastros>

            </div>
            
                <div className="informacoes">Aircraft Parameter (Max - Min)</div>
                <div className="detalhes-aeronave" id="det">
                    <InputCadastros min="0" id="pmax" type="number" placeholder="Enter the weight">Maximum Weight (T)</InputCadastros>
                    <InputCadastros min="0" id="owerweicght" type="number" placeholder="Enter the weight">OwerWeight (T)</InputCadastros>
                    <InputCadastros min="0" id="pmin" type="number" placeholder="Enter the weight">Minimum Weight (T)</InputCadastros>
                    {/* <InputCadastros min="0" id="AltMax" type="number" placeholder="Altura Max">Altura Max</InputCadastros>
                    <InputCadastros min="0" id="AltMin" type="number" placeholder="Altura Min">Altura Min</InputCadastros> */}
                    <InputCadastros min="0" id="owermax" type="number" placeholder="Overspeed Max">Overspeed Max</InputCadastros>
                    <InputCadastros min="0" id="owermin" type="number" placeholder="Overspeed Min">Overspeed Min</InputCadastros>
                    <InputCadastros min="0" id="ventomax" type="number" placeholder="Vento Max">Maximum Wind</InputCadastros>
                    <InputCadastros min="0" id="ventommin" type="number" placeholder="Vento Min">Minimum Wind</InputCadastros>
                    <InputCadastros min="0" id="isamax" type="number" placeholder="Temperatura Max">Maximum Temperature (ISA)</InputCadastros>
                    <InputCadastros min="0" id="isamin" type="number" placeholder="Vento Min">Minimum Temperature  (ISA)</InputCadastros>

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
                    <button type="submit" onClick={handleAtualizarAeronave}>Update</button>
            </div>
        </form>

    </div>

     );
}
 
export default atualizarAeronave
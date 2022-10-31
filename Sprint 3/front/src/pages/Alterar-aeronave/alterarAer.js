import React from 'react';
import "./alterarAer.css"
import InputCadastros from "../../componentes/inputCadastros/inputCadastro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router-dom"
import { faArrowLeft, faPlane } from '@fortawesome/free-solid-svg-icons'
const Swal = require('sweetalert2')

function validarCamposPositivos2(peso,peso_max,peso_min,reversor,owerweight,overspeed_max,overspeed_min){
    const campos = [peso,peso_max,peso_min,reversor,owerweight,overspeed_max,overspeed_min]
    let evalido4 = true
    for (var campo of campos){
        if (campo < 0){
            evalido4 = false
        }
    }return evalido4
}

function validarPeso (pesoMax, pesoMin){
    if (pesoMax <= pesoMin){
        return true 
    }
}
function validarOverspeed(overspeedMax, overspeedMin){
    if (overspeedMax <= overspeedMin){
        return true 
    }
}
function validarCampos(motor,peso,peso_max,peso_min,reversor,owerweight,overspeed_max,overspeed_min){
    const campos=[motor,peso,peso_max,peso_min,reversor,owerweight,overspeed_max,overspeed_min]
    let evalido5 = true
    for (var campo of campos){
        if (campo === null){
            evalido5 = false
        }
        if (campo === ""){
            evalido5= false
        }
    }return evalido5
    
}
const AtualizarAeronave = () => {
    function validarCampoNegativo(event) {
        if (event.target.value < 0) {
            event.target.value = 0
        }
    }
    let location = useNavigate()
    function voltar() {
        location(-1)
    }
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
        if (validarCampos()){
            Swal.fire({
                icon: 'error',
                title: 'Cannot enter negative numbers',
                text: 'Only temperature can be negative',
            })
            return true
        }
        if (!validarCamposPositivos2(dados.peso, dados.peso_max,dados.peso_min,dados.reversor,dados.owerweight,dados.overspeed_max,dados.overspeed_min)){
            Swal.fire({
                icon: 'error',
                title: 'Cannot enter negative numbers',
                text: 'Only temperature can be negative',
            })
            return true
        }
        if (validarPeso(dados.peso_max, dados.peso_min)){
            Swal.fire({
                icon: 'error',
                title: 'Weight max cannot be less or iqual than Weight min',
                text: '',
            })
            return true
        }
        if (validarOverspeed(dados.overspeed_max,dados.overspeed_min)){
            Swal.fire({
                icon: 'error',
                title: 'Overspeed max cannot be less or iqual than Overspeed min',
                text: '',
            })
            return true
        }
        

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
    string = string.substring(window.location.href.indexOf("Modelo_de_aeronave=") + 19, string.length);
    fetch("/BuscarAeronave" + "?modelo_de_aeronave=" + string, {
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
            <FontAwesomeIcon icon={faArrowLeft} onClick={voltar} />
            <div className="titulo">Consult Aircraft</div>
            <FontAwesomeIcon icon={faPlane} />
            <form action="#">
                <div className="detalhes-aeronave">
                    <InputCadastros desabilitado id="Modelo-de-aeronave1" type="text" placeholder="Enter the Model">Aircraft Model</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="Motor1" type="text" placeholder="Enter the engine">Motor</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="Certificacao1" type="text" placeholder="Enter the certification">Certification</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="Peso1" type="number" placeholder="Enter the weight">Reference weight</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="Reversor1" type="number" placeholder="Enter the reverser" >Reverser</InputCadastros>

                </div>

                <div className="informacoes">Aircraft Parameter (Max - Min)</div>
                <div className="detalhes-aeronave" id="det">
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="pmax" type="number" placeholder="Enter the weight">Maximum Weight (T)</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="owerweicght" type="number" placeholder="Enter the weight">OwerWeight (T)</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="pmin" type="number" placeholder="Enter the weight">Minimum Weight (T)</InputCadastros>
                    {/* <InputCadastros onInput={validarCampoNegativo} min="0" id="AltMax" type="number" placeholder="Altura Max">Altura Max</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="AltMin" type="number" placeholder="Altura Min">Altura Min</InputCadastros> */}
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="owermax" type="number" placeholder="Overspeed Max">Overspeed Max</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="owermin" type="number" placeholder="Overspeed Min">Overspeed Min</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="ventomax" type="number" placeholder="Vento Max">Maximum Wind</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="ventommin" type="number" placeholder="Vento Min">Minimum Wind</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="isamax" type="number" placeholder="Temperatura Max">Maximum Temperature (ISA)</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="isamin" type="number" placeholder="Vento Min">Minimum Temperature  (ISA)</InputCadastros>

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

export default AtualizarAeronave;
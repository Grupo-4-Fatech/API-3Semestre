import React from 'react';
import "./cadastro_aeronave.css"
import InputCadastros from "../../componentes/inputCadastros/inputCadastro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlane } from '@fortawesome/free-solid-svg-icons'
import SelectCertificacao from '../../componentes/select/selectCertificacao';
import SelectFlap from '../../componentes/select/selectFlap';
const Swal = require('sweetalert2')

function validarCampos(e) {
    var numRever = document.getElementById("Reversor").value;
    var numPeso = document.getElementById("Peso").value;

    if (numPeso < 0 && numRever < 0) {
        document.getElementById("Peso").value = 0
        document.getElementById("Reversor").value = 0
        return false
    }

    if (numRever < 0) {
        document.getElementById("Reversor").value = 0
        return false
    }
    if (numPeso < 0) {
        document.getElementById("Peso").value = 0
        return false
    }

    return true
}

const CadastroAeronave = () => {
    var handleCadastroAeronave = function (e) {
        e.preventDefault();
        var validarCps = validarCampos();
        if (validarCps) {
            var dados = {}
            dados.modelo_de_aeronave = document.getElementById('Modelo-de-aeronave').value;
            dados.motor = document.getElementById('Motor').value
            dados.certificacao = document.getElementById('Certificaçao').value
            dados.peso = document.getElementById('Peso').value
            dados.reversor = document.getElementById('Reversor').value
            // dados.overspeed = document.getElementById('Overspeed').value
            // dados.flap_de_pouso = document.getElementById('Flap de pouso').value

            //  if(document.getElementById('dot-1').checked){
            //      dados.sei n  = 1
            //  }else if(document.getElementById('dot-2').checked){
            //      dados.sei n  = 2
            //  }


            console.log(dados)
            fetch("/CadastrarAeronave", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(dados)
            }).then((resposta) => resposta.json()).then((data) => {
                console.log(data)
                // alert(data.mensagem)
                Swal.fire({
                    title: 'Successful aircraft registration',
                    icon: 'success',
                })
                if (data.ok) {
                    window.location.href = '/home';
                }
            })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Invalid type',
                text: 'Cannot enter negative numbers',
            })
        }
    }

    return (

        <div className="container">
            <a href="./home"><FontAwesomeIcon icon={faArrowLeft} /></a>
            <div className="titulo">Aircraft registration</div>
            <FontAwesomeIcon icon={faPlane} />
            <form action="#">
                <div className="informacoes">Informações da aeronave</div>
                <div className="detalhes-aeronave" id="det">
                    <SelectFlap></SelectFlap>
                    <SelectCertificacao></SelectCertificacao>
                    <InputCadastros id="Modelo-de-aeronave" type="text" placeholder="Enter the Model">Modelo do avião</InputCadastros>
                    <InputCadastros id="Motor" type="text" placeholder="Enter the engine">Motor</InputCadastros>
                    <InputCadastros min="0" id="Peso" type="number" placeholder="Enter the weight">Peso referencia (T)</InputCadastros>
                    <InputCadastros min="0" id="Reversor" type="number" placeholder="Enter the reverser" >Reverser</InputCadastros>

                </div>
                <div className="informacoes">Parâmetros da aeronave (Max - Min)</div>
                <div className="detalhes-aeronave" id="det">
                    <InputCadastros min="0" id="PesoMax" type="number" placeholder="Enter the weight">Peso Maximo (T)</InputCadastros>
                    <InputCadastros min="0" id="PesoOw" type="number" placeholder="Enter the weight">OwerWeight (T)</InputCadastros>
                    <InputCadastros min="0" id="PesoMin" type="number" placeholder="Enter the weight">Peso Mínimo (T)</InputCadastros>
                    {/* <InputCadastros min="0" id="AltMax" type="number" placeholder="Altura Max">Altura Max</InputCadastros>
                    <InputCadastros min="0" id="AltMin" type="number" placeholder="Altura Min">Altura Min</InputCadastros> */}
                    <InputCadastros min="0" id="OverSpeedMax" type="number" placeholder="Overspeed Max">Overspeed Max</InputCadastros>
                    <InputCadastros min="0" id="OverSpeedMin" type="number" placeholder="Overspeed Min">Overspeed Min</InputCadastros>
                    <InputCadastros min="0" id="VentoMax" type="number" placeholder="Vento Max">Vento Max</InputCadastros>
                    <InputCadastros min="0" id="VentoMin" type="number" placeholder="Vento Min">Vento Min</InputCadastros>
                    <InputCadastros min="0" id="TempMax" type="number" placeholder="Temperatura Max">Temperatura Max (ISA)</InputCadastros>
                    <InputCadastros min="0" id="TempMin" type="number" placeholder="Vento Min">Temperatura Min (ISA)</InputCadastros>

                </div>

                <div id="btn">
                    <button type="submit" onClick={handleCadastroAeronave}>Register</button>
                </div>
            </form>

        </div>

    );
}

export default CadastroAeronave;
import React from 'react';
import "./alterarAer.css"
import InputCadastros from "../../componentes/inputCadastros/inputCadastro";
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { faArrowLeft, faPlane, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import SelectCertificacao from '../../componentes/select/selectCertificacao';
const Swal = require('sweetalert2')


const AtualizarAeronave = () => {
    function validarSelect(selectCertificacao,selectUnidade){
        const campos = [selectCertificacao,selectUnidade]
        let evalido6 = true
        for (var campo of campos){
            if (campo === "default"){
                evalido6 = false
            }
        }return evalido6
    }

    // function validarCamposPositivos2(peso, peso_max, peso_min, reversor, owerweight, overspeed_max, overspeed_min) {
    //     const campos = [peso, peso_max, peso_min, reversor, owerweight, overspeed_max, overspeed_min]
    //     let evalido4 = true
    //     for (var campo of campos) {
    //         if (campo < 0) {
    //             evalido4 = false
    //         }
    //     } return evalido4
    // }

    function validarPeso(pesoMax, pesoMin) {
        if (pesoMax <= pesoMin) {
            return true
        }
    }
    function validarOverspeed(overspeedMax, overspeedMin) {
        if (overspeedMax <= overspeedMin) {
            return true
        }
    }
    function validarCampos(motor, peso, peso_max, peso_min, reversor, owerweight, overspeed_max, overspeed_min,altitude,temperatura,wind) {
        const campos = [motor, peso, peso_max, peso_min, reversor, owerweight, overspeed_max, overspeed_min,altitude,temperatura,wind]
        let evalido5 = true
        for (var campo of campos) {
            if (campo === null) {
                evalido5 = false
            }
            if (campo === "") {
                evalido5 = false
            }
        } return evalido5

    }
    function validarReversor(reversor) {
        if (reversor > 10) {
            return false
        } return true
    }

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
        if (!validarSelect(dados.certificacao,dados.unidadeMedida)){
            Swal.fire({
                icon: 'error',
                title: 'Select a option',
                text: '',
            })
            return true
        }
        if (!validarReversor(dados.reversor)) {
            Swal.fire({
                icon: 'error',
                title: 'Reversor cannot be more than ten',
                text: '',
            })
            return true
        }
 
        if (!validarCampos(dados.motor, dados.peso, dados.reversor,dados.temperatura, dados.peso_max, dados.peso_min, dados.owerweight, dados.overspeed_max, dados.overspeed_min, dados.vento,dados.altitude)) {
            Swal.fire({
                icon: 'error',
                title: 'Fields cannot be empty',
                text: 'Please revise the informations',
            })
            return true
        }
        // if (!validarCamposPositivos2(dados.peso, dados.peso_max, dados.peso_min, dados.reversor, dados.owerweight, dados.overspeed_max, dados.overspeed_min)) {
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Cannot enter negative numbers',
        //         text: 'Only temperature can be negative',
        //     })
        //     return true
        // }
        if (validarPeso(dados.peso_max, dados.peso_min)) {
            Swal.fire({
                icon: 'error',
                title: 'Weight max cannot be less or iqual than Weight min',
                text: '',
            })
            return true
        }
        if (validarOverspeed(dados.overspeed_max, dados.overspeed_min)) {
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
            Swal.fire({
                icon: data.ok ? 'success' : 'error',
                title: data.ok ? 'SUCCESS' : 'ERROR',
                text: data.ok ? 'Aircraft updated successfuly' : 'Error updating the user',
            }).then(() => {
                if (data.ok) {
                    window.location.href = '/Consulta-aeronave';
                }

            })
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

    const [tituloPeso, setTituloPeso] = useState('Weight Airplane')
    const [tituloMaxWeight, setTituloMaxWeight] = useState('Max Weight')
    const [tituloMinWeight, setTituloMinWeight] = useState('Min Weight')
    const [tituloOwerWeight, setOwerWeight] = useState('OwerWeight')
    const [tituloAltitude, setAltitude] = useState('Altitude')

    const handClick = (e) => {
        console.log(e.target.value);
        if (e.target.value === '1') {
            setTituloPeso('Weight Airplane (T)')
            setTituloMaxWeight('Max Weight (T)')
            setTituloMinWeight('Min Weight (T)')
            setOwerWeight('OwerWeight (T)')
            setAltitude('Altitude (M)')


        }
        if (e.target.value === '2') {
            setTituloPeso('Weight Airplane (Lb)')
            setTituloMaxWeight('Max Weight (Lb)')
            setTituloMinWeight('Min Weight (Lb)')
            setOwerWeight('OwerWeight (Lb)')
            setAltitude('Altitude (Ft)')
        }
    }

    return (

        <div className="container">
            <FontAwesomeIcon icon={faRightFromBracket} />
            <FontAwesomeIcon icon={faArrowLeft} onClick={voltar} />
            <div className="titulo">Update Aircraft</div>
            <FontAwesomeIcon icon={faPlane} />
            <form action="#">
                <div className="detalhes-aeronave">
                    <><div className="medidas">
                        <label htmlFor="" className="tituloS">Unit of Measurement</label>
                        <select onChange={handClick} className="medida" name="medidas" id="medida" defaultValue={'default'}>
                            <option value="default" disabled>Select measure:</option>
                            <option value="1">International</option>
                            <option value="2">Imperial</option>
                        </select></div>
                    </>
                    <InputCadastros desabilitado id="Modelo-de-aeronave1" type="text" placeholder="Enter the Model">Aircraft Model</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="Motor1" type="text" placeholder="Enter the engine">Motor</InputCadastros>
                    <SelectCertificacao></SelectCertificacao>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="Reversor1" type="number" placeholder="Enter the reverser" >Reverser</InputCadastros>

                </div>
                <div className='informacoes'>Valores Referencia para o calculo</div>
                <div className='detalhes-aeronave' id='det'>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="peso_ref" type="number" placeholder="Enter the peso ref" >{tituloPeso}</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="alt" type="number" placeholder="Enter the altitude" >{tituloAltitude}</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="TempMax" type="number" placeholder="Enter temperature">Temperature (ISA)</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="VentoMax" type="number" placeholder="Max wind">Wind</InputCadastros>
                </div>
                <div className="informacoes">Aircraft Parameter (Max - Min)</div>
                <div className="detalhes-aeronave" id="det">
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="pmax" type="number" placeholder="Enter the weight">{tituloMaxWeight}</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="owerweicght" type="number" placeholder="Enter the weight">{tituloOwerWeight}</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="pmin" type="number" placeholder="Enter the weight">{tituloMinWeight}</InputCadastros>
                    {/* <InputCadastros onInput={validarCampoNegativo} min="0" id="AltMax" type="number" placeholder="Altura Max">Altura Max</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="AltMin" type="number" placeholder="Altura Min">Altura Min</InputCadastros> */}
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="owermax" type="number" placeholder="Overspeed Max">Overspeed Max</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="owermin" type="number" placeholder="Overspeed Min">Overspeed Min</InputCadastros>

                </div>
                <div id="btn">
                    <button type="submit" onClick={handleAtualizarAeronave}>Update</button>
                </div>
            </form>

        </div>

    );
}

export default AtualizarAeronave;
import React from 'react';
import "./alterarAer.css"
import InputCadastros from "../../componentes/inputCadastros/inputCadastro";
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { faArrowLeft, faPlane, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import SelectCertificacao1 from '../../componentes/select/selectCertificacao1';
const Swal = require('sweetalert2')


const AtualizarAeronave = () => {

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
    function validarCampos(motor,reversor, pesoAeronave, pesoRef,altitude,temperatura,vento,pesoMax,pesoMin,owerweight,overspeed_max,overspeed_min) {
        const campos = [motor,reversor, pesoAeronave, pesoRef,altitude,temperatura,vento,pesoMax,pesoMin,owerweight,overspeed_max,overspeed_min]
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
  

        dados.modelo_de_aeronave = document.getElementById('Modelo-de-aeronave1').value
        dados.unidade_de_medida = document.getElementById('Medida1').value
        dados.certificacao = document.getElementById('Certificacao1').value
        dados.motor = document.getElementById('Motor1').value
        dados.peso = document.getElementById('Peso1').value
        dados.reversor = document.getElementById('Reversor1').value
        // dados.landing_flap = document.getElementById('LF').value
        dados.peso_referencia = document.getElementById('Peso_ref').value
        dados.altitude = document.getElementById('Alt').value 
        dados.isa = document.getElementById('Temp1').value
        dados.vento = document.getElementById('Vento1').value
        dados.peso_max = document.getElementById('Pmax').value
        dados.peso_min = document.getElementById('Pmin').value
        dados.owerweight = document.getElementById('Owerweicght').value
        dados.overspeed_max = document.getElementById('Owermax').value
        dados.overspeed_min = document.getElementById('Owermin').value

        if (!validarReversor(dados.reversor)) {
            Swal.fire({
                icon: 'error',
                title: 'Reversor cannot be more than ten',
                text: '',
            })
            return true
        }
 
        if (!validarCampos(dados.motor,dados.reversor,dados.peso,dados.peso_referencia,dados.altitude,dados.isa,dados.vento,dados.peso_max,dados.peso_min,dados.owerweight,dados.overspeed_max,dados.overspeed_min)) {
            Swal.fire({
                icon: 'error',
                title: 'Fields cannot be empty',
                text: 'Please revise the informations',
            })
            return true
        }
     
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
        document.getElementById('Medida1').value = data.unidade_de_medida
        document.getElementById('Certificacao1').value = data.certificacao
        document.getElementById('Motor1').value = data.motor
        document.getElementById('Peso1').value = data.peso
        document.getElementById('Reversor1').value = data.reversor
        // document.getElementById('LF').value = data.landing_flap
        document.getElementById('Peso_ref').value = data.peso_referencia
        document.getElementById('Alt').value = data.altitude
        document.getElementById('Temp1').value = data.isa
        document.getElementById('Vento1').value = data.vento
        document.getElementById('Pmax').value = data.peso_max
        document.getElementById('Pmin').value = data.peso_min
        document.getElementById('Owerweicght').value = data.owerweight
        document.getElementById('Owermax').value = data.overspeed_max
        document.getElementById('Owermin').value = data.overspeed_min

 



    });

    const [tituloPeso, setTituloPeso] = useState('Weight Airplane')
    const [tituloMaxWeight, setTituloMaxWeight] = useState('Max Weight')
    const [tituloMinWeight, setTituloMinWeight] = useState('Min Weight')
    const [tituloOwerWeight, setOwerWeight] = useState('OwerWeight')
    const [tituloAltitude, setAltitude] = useState('Altitude')
    const [ tituloPesoRef, setTituloPesoRef] = useState('Weight Ref')

    const handClick = (e) => {
        console.log(e.target.value);
        if (e.target.value === '1') {
            setTituloPeso('Weight Airplane (T)')
            setTituloMaxWeight('Max Weight (T)')
            setTituloMinWeight('Min Weight (T)')
            setOwerWeight('OwerWeight (T)')
            setAltitude('Altitude (M)')
            setTituloPesoRef('Weight Ref (T)')


        }
        if (e.target.value === '2') {
            setTituloPeso('Weight Airplane (Lb)')
            setTituloMaxWeight('Max Weight (Lb)')
            setTituloMinWeight('Min Weight (Lb)')
            setOwerWeight('OwerWeight (Lb)')
            setAltitude('Altitude (Ft)')
            setTituloPesoRef('Weight Ref (T)')
        }
    }

    return (

        <div className="container">
            <div id='btnlogout'><button ><FontAwesomeIcon icon={faRightFromBracket} id="iconlogout"/></button></div>
            <FontAwesomeIcon icon={faArrowLeft} onClick={voltar} />
            <div className="titulo">Update Aircraft</div>
            <FontAwesomeIcon icon={faPlane} />
            <form action="#">
                <div className="detalhes-aeronave">
                    <><div className="medidas">
                        <label htmlFor="" className="tituloS">Unit of Measurement</label>
                        <select onChange={handClick} className="medida" name="medidas" id="Medida1" defaultValue={'default'}>
                            <option value="default" disabled>Select measure:</option>
                            <option value="1">International</option>
                            <option value="2">Imperial</option>
                        </select></div>
                    </>
                    <InputCadastros desabilitado id="Modelo-de-aeronave1" type="text" placeholder="Enter Model">Aircraft Model</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="Motor1" type="text" placeholder="Enter engine">Motor</InputCadastros>
                    <SelectCertificacao1></SelectCertificacao1>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="Reversor1" type="number" placeholder="Enter reverser" >Reverser</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="Peso1" type="number" placeholder="Enter weight">{tituloPeso}</InputCadastros>

                </div>
                <div className='informacoes'>Reference values ​​for the calculation</div>
                <div className='detalhes-aeronave' id='det'>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="Peso_ref" type="number" placeholder="Enter peso ref" >{tituloPesoRef}</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="Alt" type="number" placeholder="Enter altitude" >{tituloAltitude}</InputCadastros>
                    <InputCadastros min="0" id="Temp1" type="number" placeholder="Enter temperature">Temperature (ISA)</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="Vento1" type="number" placeholder="Enter wind">Wind</InputCadastros>
                </div>
                <div className="informacoes">Aircraft Parameter (Max - Min)</div>
                <div className="detalhes-aeronave" id="det">
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="Pmax" type="number" placeholder="Enter Max weight">{tituloMaxWeight}</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="Owerweicght" type="number" placeholder="Enter owerweight">{tituloOwerWeight}</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="Pmin" type="number" placeholder="Enter Min weight">{tituloMinWeight}</InputCadastros>
                    {/* <InputCadastros onInput={validarCampoNegativo} min="0" id="AltMax" type="number" placeholder="Altura Max">Altura Max</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="AltMin" type="number" placeholder="Altura Min">Altura Min</InputCadastros> */}
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="Owermax" type="number" placeholder="Overspeed Max">Overspeed Max</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} min="0" id="Owermin" type="number" placeholder="Overspeed Min">Overspeed Min</InputCadastros>

                </div>
                <div id="btn">
                    <button type="submit" onClick={handleAtualizarAeronave}>Update</button>
                </div>
            </form>

        </div>

    );
}

export default AtualizarAeronave;
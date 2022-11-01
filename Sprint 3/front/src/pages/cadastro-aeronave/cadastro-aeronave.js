import React from 'react';
import "./cadastro_aeronave.css"
import InputCadastros from "../../componentes/inputCadastros/inputCadastro";
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlane, faTruckMonster,faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import SelectCertificacao from '../../componentes/select/selectCertificacao';
import SelectFlap from '../../componentes/select/selectFlap';
const Swal = require('sweetalert2')

function validarCamposPositivos(e) {
    var peso_max = document.getElementById('PesoMax')
    var peso_min = document.getElementById("PesoMin")
    var owerweight = document.getElementById("PesoOw")
    var overspeed_max = document.getElementById("OverSpeedMax")
    var overspeed_min = document.getElementById("OverSpeedMin")
    var vento= document.getElementById("Vento")
    var numRever = document.getElementById("Reversor");
    var numPeso = document.getElementById("Peso");
    var altitude = document.getElementById("alt")
    const camposPositivos = [peso_max, peso_min, owerweight, overspeed_max, overspeed_min, vento, numRever, numPeso,altitude]
    let evalido = true
    for (var campo of camposPositivos) {
        if (campo.value < 0) {
            campo.value = 0
            evalido = false
        }
    } return evalido
}
function validarCampos(e) {
    var peso_max = document.getElementById('PesoMax')
    var peso_min = document.getElementById("PesoMin")
    var owerweight = document.getElementById("PesoOw")
    var overspeed_max = document.getElementById("OverSpeedMax")
    var overspeed_min = document.getElementById("OverSpeedMin")
    var vento = document.getElementById("Vento")
    var temp = document.getElementById("Temp")
    var numRever = document.getElementById("Reversor");
    var numPeso = document.getElementById("Peso");
    const campos = [peso_max, peso_min, owerweight, overspeed_max, overspeed_min, vento, numRever, numPeso, temp]
    let evalido = true
    for (var campo of campos) {
        if (campo.value === null) {
            evalido = false
        }
        if (campo.value === "") {
            evalido = false
        }
    } return evalido
}
function validarReversor(e) {
    var numRever = document.getElementById("Reversor").value;
    if (numRever > 10) {
        document.getElementById("Reversor").value = 0
        return false
    } return true
}

function validarPeso(e) {
    var pesoMaximo = document.getElementById('PesoMax').value
    var pesoMinimo = document.getElementById("PesoMin").value
    if (pesoMaximo <= pesoMinimo) {
        return false
    } return true
}
function validarOverspeed(e) {
    var overspeedMaximo = document.getElementById("OverSpeedMax").value
    var overspeedMinimo = document.getElementById("OverSpeedMin").value
    if (overspeedMaximo <= overspeedMinimo) {
        return false
    } return true
}

function validarSelect(e) {
    var certificacao = document.getElementById('slcCertificacao').value
    if (certificacao === "default") {
        return false
    } return true
}
const CadastroAeronave = () => {
    var handleCadastroAeronave = function (e) {
        e.preventDefault();
        if (!validarCampos()) {
            Swal.fire({
                icon: 'error',
                title: 'Fields cannot be empty',
                text: '',
            })
            return true

        }
        if (!validarCamposPositivos()) {
            Swal.fire({
                icon: 'error',
                title: 'Cannot enter negative numbers',
                text: 'Only temperature can be negative',
            })
            return true

        }
        if (!validarSelect()) {
            Swal.fire({
                icon: 'error',
                title: 'Select a certication',
                text: '',
            })
            return true
        }
        if (!validarReversor()) {
            Swal.fire({
                icon: 'error',
                title: 'Reverser cannot be more than ten',
                text: '',
            })
            return true
        }

        if (!validarPeso()) {
            Swal.fire({
                icon: 'error',
                title: 'Weight max cannot be less or iqual than Weight min',
                text: '',
            })
            return true
        }

        if (!validarOverspeed()) {
            Swal.fire({
                icon: 'error',
                title: 'Overspeed max cannot be less or iqual than Overspeed min',
                text: '',
            })
            return true
        }


        var dados = {}
        dados.modelo_de_aeronave = document.getElementById('Modelo-de-aeronave').value;
        dados.motor = document.getElementById('Motor').value
        dados.certificacao = document.getElementById('slcCertificacao').value
        dados.reversor = document.getElementById('Reversor').value
        dados.peso = document.getElementById('Peso').value
        // dados.landing_flap = document.getElementById('LF').value
        dados.peso_max = document.getElementById('PesoMax').value
        dados.peso_min = document.getElementById("PesoMin").value
        dados.owerweight = document.getElementById("PesoOw").value
        dados.overspeed_max = document.getElementById("OverSpeedMax").value
        dados.overspeed_min = document.getElementById("OverSpeedMin").value
        dados.vento = document.getElementById("Vento").value
        dados.temp = document.getElementById("Temp").value


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
            <FontAwesomeIcon icon={faRightFromBracket}/>
            <a href="./home"><FontAwesomeIcon icon={faArrowLeft} /></a>
            <div className="titulo">Aircraft registration</div>
            <FontAwesomeIcon icon={faPlane} />
            <form action="#">
                <div className="informacoes">Informações da aeronave</div>
                <div className="detalhes-aeronave" id="det">
                    {/* <SelectFlap></SelectFlap> */}
                    <><div className="medidas">
                        <label htmlFor="" className="tituloS">Unit of Measurement</label>
                        <select onChange={handClick} className="medida" name="medidas" id="medida" defaultValue={'default'}>
                            <option value="default" disabled>Select measure:</option>
                            <option value="1">International</option>
                            <option value="2">Imperial</option>
                        </select></div>
                    </>
                    <InputCadastros id="Modelo-de-aeronave" type="text" placeholder="Enter the Model">Airplane model</InputCadastros>
                    <SelectCertificacao></SelectCertificacao>
                    <InputCadastros id="Motor" type="text" placeholder="Enter the engine">Engine</InputCadastros>
                    <InputCadastros min="0" id="Peso" type="number" placeholder="Enter the weight">{tituloPeso}</InputCadastros>
                    <InputCadastros min="0" id="Reversor" type="number" placeholder="Enter the reverser" >Reverser</InputCadastros>
                    {/* <InputCadastros id="Flaps" type ="text" placeholder="Enter the Flap">Flap</InputCadastros> */}


                </div>
                <div className='informacoes'>Valores Referencia para o calculo</div>
                <div className="detalhes-aeronave" id="det">
                <InputCadastros min="0" id="peso_ref" type="number" placeholder="Enter the peso ref" >Peso referencia</InputCadastros>
                <InputCadastros min="0" id="alt" type="number" placeholder="Enter the altitude" >{tituloAltitude}</InputCadastros>
                <InputCadastros min="0" id="Temp" type="number" placeholder="Enter temperature">Temperature (ISA)</InputCadastros>
                <InputCadastros min="0" id="Vento" type="number" placeholder="Wind">Wind</InputCadastros>
                </div>

                <div className="informacoes">Parâmetros da aeronave (Max - Min)</div>
                <div className="detalhes-aeronave" id="det">
                    
                    <InputCadastros min="0" id="PesoMax" type="number" placeholder="Enter the weight">{tituloMaxWeight}</InputCadastros>
                    <InputCadastros min="0" id="PesoOw" type="number" placeholder="Enter the weight">{tituloOwerWeight}</InputCadastros>
                    <InputCadastros min="0" id="PesoMin" type="number" placeholder="Enter the weight">{tituloMinWeight} </InputCadastros>
                    {/* <InputCadastros min="0" id="AltMax" type="number" placeholder="Altura Max">Altura Max</InputCadastros>
                    <InputCadastros min="0" id="AltMin" type="number" placeholder="Altura Min">Altura Min</InputCadastros> */}
                    <InputCadastros min="0" id="OverSpeedMax" type="number" placeholder="Overspeed Max">Overspeed Max</InputCadastros>
                    <InputCadastros min="0" id="OverSpeedMin" type="number" placeholder="Overspeed Min">Overspeed Min</InputCadastros>
                </div>

                <div id="btn">
                    <button type="submit" onClick={handleCadastroAeronave}>Register</button>
                </div>
            </form>

        </div>

    );
}

export default CadastroAeronave;
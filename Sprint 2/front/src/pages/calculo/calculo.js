import React from 'react';
import "./calculo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlaneArrival } from '@fortawesome/free-solid-svg-icons'
import InputCadastros from "../../componentes/inputCadastros/inputCadastro";
// import NativeSelectDemo from "../../componentes/select/select";
import SelectSlope from "../../componentes/select/selectSlope";
import SelectFlap from "../../componentes/select/selectFlap";
import SelectCondicao from "../../componentes/select/selectCondicao"
import SelectIce from "../../componentes/select/selectIce";
import SelectBk from "../../componentes/select/selectBk";
import SelectWind from "../../componentes/select/selectWind";
const Swal = require('sweetalert2')


function validacao(e) {
    var numAlt = document.getElementById("Alt");
    var numPeso = document.getElementById("Peso");
    var numWind = document.getElementById("Wind");
    var numReversor = document.getElementById("Reversor");
    var numSlope = document.getElementById("InputSlope");
    const campos = [numAlt,numPeso,numReversor,numSlope,numWind]


    console.log("campos" + campos);
    let Evalido = true 
    for(var campo of campos){
        console.log(campo);
        if (campo.value < 0 ){
            campo.value = 0
            Evalido = false
        }
    } return Evalido
    
    // if (numAlt < 0) {
    //     document.getElementById("Alt").value = 0
    //     // alert ("a")
    //     return false
    // }
    // if (numPeso < 0) {
    //     document.getElementById("Peso").value = 0
    //     return false
    // }
    // if (numWind < 0) {
    //     document.getElementById("Wind").value = 0
    //     return false
    // }
    // if (numReversor < 0) {
    //     document.getElementById("Reversor").value = 0
    //     return false
    // }
    // if (numSlope < 0) {
    //     document.getElementById("InputSlope").value = 0
    //     return false
    // }
    //     return true
    

}

const func = (tipo) => {

    if (tipo === 'flap') {
        return <SelectFlap></SelectFlap>
    }
    if (tipo === 'bk') {
        return <SelectBk></SelectBk>
    }
}


var handleCalcular = function (e) {
    e.preventDefault();
    var valicacaoCampos = validacao();
    console.log(valicacaoCampos)
    if (valicacaoCampos) {
        var dados = {
            Flap: parseInt(document.getElementById('slcFlap').value),
            Ice: document.getElementById('slcIce').value === 1 ? false : true,
            RunwayCondicion: parseInt(document.getElementById('runway_condition').value),
            Peso: parseInt(document.getElementById('Peso').value),
            Alt: parseInt(document.getElementById('Alt').value),
            LikeWind: parseInt(document.getElementById('slcWind').value),
            Wind: parseInt(document.getElementById('Wind').value),
            Temp: parseInt(document.getElementById('Temp').value),
            LikeSlope: Number(document.getElementById('slcSlope').value),
            Slope: parseInt(document.getElementById('InputSlope').value),
            Rev: parseInt(document.getElementById('Reversor').value)

        };

        fetch("/calcular", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dados)
        }).then((resposta) => resposta.json()).then((data) => {
            document.getElementById('result').value = data.toFixed(2) + "m";
            Swal.fire({
                title: 'Calculation performed successfully',
                text:"You need " + data.toFixed(2) + "m",
                icon: 'success',
            })
        })
        
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Invalid type',
            text: 'Cannot enter negative numbers',
        })
        
    }

    //     var dados = {
    //         Flap: parseInt(document.getElementById('slcFlap').value),
    //         Ice: document.getElementById('slcIce').value == 1 ? false : true,
    //         RunwayCondicion: parseInt(document.getElementById('runway_condition').value),
    //         Peso: parseInt(document.getElementById('Peso').value),
    //         Alt: parseInt(document.getElementById('Alt').value),
    //         LikeWind: parseInt(document.getElementById('slcWind').value),
    //         Wind: parseInt(document.getElementById('Wind').value),
    //         Temp: parseInt(document.getElementById('Temp').value),
    //         LikeSlope: Number(document.getElementById('slcSlope').value),
    //         Slope: parseInt(document.getElementById('InputSlope').value),
    //         Rev: parseInt(document.getElementById('Reversor').value)

    //     };

    //     fetch("/calcular", {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json;charset=utf-8'
    //         },
    //         body: JSON.stringify(dados)
    //     }).then((resposta) => resposta.json()).then((data) => {

    //         document.getElementById('result').value = data + "m";
    //     })
}




const Calculo = () => {

    return (
        <div className="cont">
            {/* <a href="./home"><FontAwesomeIcon icon={faArrowLeft} /></a> */}
            <div className="tituloCal">Landing calculation</div>
            <FontAwesomeIcon icon={faPlaneArrival} />
            <form action="#">
                <div className="detalhes-aeronave">
                    {/* <NativeSelectDemo></NativeSelectDemo> */}
                    {/* {func('bk')} */}
                    {func('flap')}
                    <SelectIce></SelectIce>
                    <SelectCondicao></SelectCondicao>
                    <InputCadastros min="0" id="Peso" type="number" placeholder="Ex.: 18" >Weight (T)</InputCadastros>
                    <SelectSlope></SelectSlope>
                    <InputCadastros min="0" id="InputSlope" type="number" placeholder="Ex.: 0.2">Slope (%)</InputCadastros>
                    <InputCadastros min="0" id="Alt" type="number" placeholder="Ex.: 1800" >Altitude (ft)</InputCadastros>
                    <InputCadastros id="Temp" type="number" placeholder="Ex.: 20">Temperature (°C) </InputCadastros>
                    <SelectWind></SelectWind>
                    <InputCadastros min="0" id="Wind" type="number" placeholder="Ex.: 2">Wind (KT)</InputCadastros>
                    {/* <InputCadastros min="0" id="Overspeed" type="number" placeholder="Enter the overspeed">Overspeed</InputCadastros> */}
                    <InputCadastros qtd="10" min="0" id="Reversor" type="number" placeholder="Ex.: 1">Reverser (Un) </InputCadastros>

                </div>

                {/* <div className="Reversor-details">
                <input type="radio" name="Reversor" id="dot-1"/>
                <input type="radio" name="Reversor" id="dot-2"/>
                <span className="Reversor-title">Reversor</span>

                <div className="category">

                    <label htmlFor="dot-1">
                        <span className="dot one"></span>
                        <span className="reversor">Usa reversor</span>
                    </label>

                    <label htmlFor="dot-2">
                        <span className="dot two"></span>
                        <span className="reversor">Não usa reversor</span>
                    </label>

                </div>

            </div> */}
                <div className="button">
                    <input type="submit" onClick={handleCalcular} value="Calculate" id="calcular" />
                </div>
                <div className="input_box">
                    <span className="details">Necessary clue</span>
                    <input type="text" placeholder="Result" disabled="disabled" id="result" />
                </div>
            </form>
        </div>


    );
}

export default Calculo;
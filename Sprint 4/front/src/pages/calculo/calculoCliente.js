import React, { Component } from 'react';
import { useState, useEffect } from 'react'
import "./calculo.css"
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import { faPlaneArrival, faArrowLeft, faSleigh } from '@fortawesome/free-solid-svg-icons'
import InputCadastros from "../../componentes/inputCadastros/inputCadastro";
// import NativeSelectDemo from "../../componentes/select/select";
import SelectSlope from "../../componentes/select/selectSlope";
import SelectFlap from "../../componentes/select/selectFlap";
import SelectCondicao from "../../componentes/select/selectCondicao"
import SelectIce from "../../componentes/select/selectIce";
import SelectBk from "../../componentes/select/selectBk";
import SelectWind from "../../componentes/select/selectWind";
import Logout from '../../componentes/logout/logout';
const Swal = require('sweetalert2')


function validacao(e) {
    var numAlt = document.getElementById("Alt");
    var numPeso = document.getElementById("Peso");
    var numWind = document.getElementById("Wind");
    var numReversor = document.getElementById("Reversor");
    var numSlope = document.getElementById("InputSlope");
    const campos = [numAlt, numPeso, numReversor, numSlope, numWind]
    console.log("campos" + campos);
    let Evalido = true
    for (var campo of campos) {
        console.log(campo);
        if (campo.value < 0) {
            campo.value = 0
            Evalido = false
        }
        if (campo.value === "") {
            Evalido = false
        }
    } return Evalido

}
function validacao2(e) {
    var valFlap = document.getElementById("slcFlap").value;
    var valRC = document.getElementById("runway_condition").value;
    var valIce = document.getElementById("slcIce").value;
    var valSlope = document.getElementById("slcSlope").value;
    var valWind = document.getElementById("slcWind").value;
    const selects = [valFlap, valRC, valIce, valSlope, valWind]
    let Evalido2 = true
    for (var sel of selects) {
        if (sel === "default") {
            Evalido2 = false
        }
    } return Evalido2
}
function validacao3(e) {
    const numAlt = document.getElementById("Alt");
    const numPeso = document.getElementById("Peso");
    const numWind = document.getElementById("Wind");
    const numReversor = document.getElementById("Reversor");
    const numSlope = document.getElementById("InputSlope");
    const campos = [numAlt, numPeso, numReversor, numSlope, numWind]
    console.log("campos" + campos);
    let Evalido3 = true
    for (const campo of campos) {
        if (campo.value === "") {
            Evalido3 = false
        }
    } return Evalido3
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
    if (!validacao2()) {
        Swal.fire({
            icon: 'error',
            title: 'Select an option',

        })
        return true
    }
    if (!validacao3()) {
        Swal.fire({
            icon: 'error',
            title: 'Field cannot be empty',
        })
        return true
    }
    if (!validacao()) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid type',
            text: 'Cannot enter negative numbers',
        })
        return true
    }
    if (!validacao2()) {
        Swal.fire({
            icon: 'error',
            title: 'Select an option',

        })
        return true
    }

    var dados = {
        UnitOfMeasurement: parseInt(document.getElementById('medida').value),
        Flap: parseInt(document.getElementById('slcFlap').value),
        Ice: document.getElementById('slcIce').value, //=== 1 ? false : true,
        RunwayCondicion: parseInt(document.getElementById('runway_condition').value),
        Peso: document.getElementById('Peso').value,
        Alt: document.getElementById('Alt').value,
        LikeWind: parseInt(document.getElementById('slcWind').value),
        Wind: document.getElementById('Wind').value,
        Temp: document.getElementById('Temp').value,
        LikeSlope: Number(document.getElementById('slcSlope').value),
        Slope: document.getElementById('InputSlope').value,
        Rev: parseInt(document.getElementById('Reversor').value),
        Modelo: document.getElementById('aircraft-model').value

    };

    fetch("/calcular", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(dados)
    }).then((resposta) => resposta.json()).then((data) => {
        document.getElementById('result').value = data.toFixed(2) + "m";
        console.log(data)
        Swal.fire({
            title: 'Calculation performed successfully',
            text: "You need " + data + "m",
            icon: 'success',
        })
    })

}
const Calculo = () => {
    const [tituloPeso, setTituloPeso] = useState('Weight')
    const [tituloAltitude, setTituloAltitude] = useState('Altitude')
    const [tituloTemperature, setTituloTemperature] = useState('Temperature')
    const [tituloWind, setWind] = useState('Wind')
    const [placeholderWeight, setPlaceholderWeight] = useState('Ex.: 18')
    const [placeholderAltitude, setPlaceholderAltitude] = useState('Ex.: 1800')
    const [placeholderTemperature, setPlaceholderTemperature] = useState('Ex.: 20')
    const [placeholderWind, setPlaceholderWind] = useState('Ex.: 2')
    const [placeholderSlope, setPlaceholderSlope] = useState('Ex.: 0.1')
    const [uniteMedida, setUnidadeMedida] = useState("")
    const [slopes, setSlopes] = useState([])


    function validacao(e) {
        var numAlt = document.getElementById("Alt");
        var numPeso = document.getElementById("Peso");
        var numWind = document.getElementById("Wind");
        var numReversor = document.getElementById("Reversor");
        var numSlope = document.getElementById("InputSlope");
        const campos = [numAlt, numPeso, numReversor, numSlope, numWind]
        let Evalido = true
        for (var campo of campos) {
            if (campo.value < 0) {
                campo.value = 0
                Evalido = false
            }
        } return Evalido

    }
    function validacao2(e) {
        var valFlap = document.getElementById("slcFlap").value;
        var valRC = document.getElementById("runway_condition").value;
        var valIce = document.getElementById("slcIce").value;
        var valSlope = document.getElementById("slcSlope").value;
        var valWind = document.getElementById("slcWind").value;
        var unidadeMedida = document.getElementById("medida").value;
        const selects = [valFlap, valRC, valIce, valSlope, valWind, unidadeMedida]
        let Evalido2 = true
        for (var sel of selects) {
            if (sel === "default") {
                Evalido2 = false
            }
        } return Evalido2
    }
    function validacao3(e) {
        const numAlt = document.getElementById("Alt");
        const numPeso = document.getElementById("Peso");
        const numWind = document.getElementById("Wind");
        const numReversor = document.getElementById("Reversor");
        const numSlope = document.getElementById("InputSlope");
        const numTemp = document.getElementById("Temp")
        const campos = [numAlt, numPeso, numReversor, numSlope, numWind, numTemp]
        let Evalido3 = true
        for (const campo of campos) {
            if (campo.value === "") {
                Evalido3 = false
            }
        } return Evalido3
    }
    function validarSlopeMax(e) {
        const slope = document.getElementById("InputSlope");
        if (slope.value > 10) {
            slope.value = 0
            return false


        } return true
    }
    function validarPesoMax(e) {
        let pesinhuu = document.getElementById("Peso").value
        if (pesinhuu <= pesoMaximo) {
            return true
        }
    }
    function validarPesoMin(e) {
        let pesinhuu2 = document.getElementById("Peso").value
        if (pesinhuu2 < pesoMin) {
            return false
        } return true
    }

    function validarAltMax(e) {
        let alt = document.getElementById("Alt")
        if (alt.value > 39370) {
            alt.value = 0
            return false
        } return true

    }
    function validarAltMin(e) {
        let alt = document.getElementById("Alt")
        if (alt.value < 98) {
            alt.value = 98
            return false
        } return true

    }
    function validarTempMax(e) {
        let temp = document.getElementById("Temp")
        if (temp.value > 52) {
            temp.value = 0
            return false
        } return true
    }
    function validarTempMin(e) {
        let temp = document.getElementById("Temp")
        if (temp.value < -50) {
            temp.value = 0
            return false
        } return true
    }
    function validarReversor(e) {
        let reversor = document.getElementById("Reversor")
        if (reversor.value > 12) {
            reversor.value = 0
            return false
        } return true
    }
    function validarVento(e) {
        let vento = document.getElementById("Wind")
        if (vento.value > 150) {
            vento.value = 0
            return false
        } return true
    }

    const func = (tipo) => {

        if (tipo === 'flap') {
            return <SelectFlap dados={slopes}></SelectFlap>
        }
        if (tipo === 'bk') {
            return <SelectBk></SelectBk>
        }
    }

    var HandleCalcular = function (e) {
        e.preventDefault();
        if (!validacao2()) {
            Swal.fire({
                icon: 'error',
                title: 'Select an option',

            })
            return true
        }
        if (!validarSlopeMax()) {
            Swal.fire({
                icon: 'error',
                title: 'Slope cannot be more than ten',
                text: '',
            })
            return true
        }
        if (!validarAltMax()) {
            Swal.fire({
                icon: 'error',
                title: 'Altitude cannot be more than 39370 Ft',
                text: '',
            })
            return true
        }
        if (!validarAltMin()) {
            Swal.fire({
                icon: 'error',
                title: 'Altitude cannot be less than 98 Ft',
                text: '',
            })
            return true
        }
        if (!validarTempMax()) {
            Swal.fire({
                icon: 'error',
                title: 'Temperature cannot be more than 52 ºC',
                text: '',
            })
            return true
        }
        if (!validarTempMin()) {
            Swal.fire({
                icon: 'error',
                title: 'Temperature cannot be less than -50 ºC',
                text: '',
            })
            return true
        }
        if (!validacao3()) {
            Swal.fire({
                icon: 'error',
                title: 'Field cannot be empty',
            })
            return true
        }
        if (!validacao()) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid type',
                text: 'Cannot enter negative numbers',
            })
            return true
        }
        if (!validarPesoMax()) {
            Swal.fire({
                icon: 'error',
                title: 'Weight cannot be more than: ' + pesoMaximo,
                text: '',
            })
            return true
        }
        if (!validarPesoMin()) {
            Swal.fire({
                icon: 'error',
                title: 'Weight cannot be less than: ' + pesoMin,
                text: '',
            })
            return true
        }
        if(!validarVento()){
            Swal.fire({
                icon: 'error',
                title: 'Wind cannot be more than 150 Kt ',
            })
            return true
        }
        if (!validarReversor()) {
            Swal.fire({
                icon: 'error',
                title: 'Reversor cannot be more than 12 ',
            })
            return true
        }

        var dados = {
            UnitOfMeasurement: parseInt(document.getElementById('medida').value),
            Flap: parseInt(document.getElementById('slcFlap').value),
            Ice: document.getElementById('slcIce').value, //== 1 ? false : true,
            RunwayCondicion: parseInt(document.getElementById('runway_condition').value),
            Peso: document.getElementById('Peso').value,
            Alt: document.getElementById('Alt').value,
            LikeWind: parseInt(document.getElementById('slcWind').value),
            Wind: document.getElementById('Wind').value,
            Temp: document.getElementById('Temp').value,
            LikeSlope: Number(document.getElementById('slcSlope').value),
            Slope: document.getElementById('InputSlope').value,
            Rev: parseInt(document.getElementById('Reversor').value),
            Modelo: document.getElementById('aircraft-model').value

        };
        console.log(dados.Ice)

        fetch("/calcular", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dados)
        }).then((resposta) => resposta.json()).then((data) => {

            document.getElementById('result').value = data.toFixed(2) + " " + uniteMedida;
            Swal.fire({
                title: 'Calculation performed successfully',
                text: "You need " + data.toFixed(2) + " " + uniteMedida,
                icon: 'success',
            })
        })
    }

    var dados = [{
        modelo_de_aeronave: "teste"
    }];
    const [aeronaves, setAronave] = useState(dados);
    const ListarAeronaves = function () {
        fetch("/ListarAeronave", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },

        }).then((resposta) => resposta.json()).then((data) => {


            setAronave(data)
        });
    }
    const ListarFlaps = function () {
        fetch("/BuscarFlapAeronave"+ '?aeronave=' + document.getElementById('aircraft-model').value, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },

        }).then((resposta) => resposta.json()).then((data) => {


            setSlopes(data)
        });
    }

    useEffect(() => {
        ListarAeronaves();
    }, [])

    const [pesoMaximo, setPesoMaximo] = useState(0);
    const [pesoMin, setPesoMin] = useState(0);
    const OnChangeAeronave = () => {
        ListarFlaps();
        if (document.getElementById('aircraft-model').value == 'default') {
            return
        }
        fetch("/BuscarAeronave" + "?modelo_de_aeronave=" + document.getElementById('aircraft-model').value, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },

        }).then((resposta) => resposta.json()).then((data) => {
            console.log(data)
            if (document.getElementById('medida').value == 2 && data.unidade_de_medida == 1) {

                setPesoMaximo((data.peso_max * 2205))
                setPesoMin((data.peso_min * 2205))

                console.log(1)
            } else if (document.getElementById('medida').value == 1 && data.unidade_de_medida == 2) {
                setPesoMaximo((data.peso_max / 2205))
                setPesoMin((data.peso_min / 2205))
                console.log(2)
            }
            else {
                console.log(document.getElementById('medida').value)
                console.log(3)
                setPesoMaximo(data.peso_max)
                setPesoMin(data.peso_min)
            }

        });
    }

    const handClick = (e) => {
        console.log(e.target.value);
        if (e.target.value === '1') {
            OnChangeAeronave();
            setTituloPeso('Weight (Kg)')
            setTituloAltitude('Altitude (Ft)')
            setTituloTemperature('Temperature (ºC)')
            setWind('wind (Km/h)')
            setPlaceholderAltitude('Ex.: 1800')
            setPlaceholderTemperature('Ex.: 20')
            setPlaceholderWeight('Ex.: 18000')
            setPlaceholderWind('Ex.: 3.704')
            setPlaceholderSlope('Ex.: 0.1')
            setUnidadeMedida('M')

        }
        if (e.target.value === '2') {
            OnChangeAeronave();
            setTituloPeso('Weight (Lb)')
            setTituloAltitude('Altitude (Ft)')
            setTituloTemperature('Temperature (ºC)')
            setWind('wind (Kt)')
            setPlaceholderAltitude('Ex.: 1800')
            setPlaceholderTemperature('Ex.: 20')
            setPlaceholderWeight('Ex.: 44092')
            setPlaceholderWind('Ex.: 2')
            setPlaceholderSlope('Ex.: 0.1')
            setUnidadeMedida('Ft')
        }
    }
    return (
        <div className="container">
            <Logout></Logout>
            <div className="titulo">Landing calculation</div>
            <FontAwesomeIcon icon={faPlaneArrival} />
            <form action="#">
                <div className="detalhes">
                    <><div className="medidas">
                        <label htmlFor="" className="tituloS">Unit of Measurement</label>
                        <select onChange={handClick} className="medida" name="medidas" id="medida" defaultValue={'default'}>
                            <option value="default" disabled>Select measure:</option>
                            <option value="1">International</option>
                            <option value="2">Imperial</option>
                        </select></div>
                    </>
                    <><div className="medidas">
                        <label htmlFor="" className="tituloS">Aircraft Model</label>
                        <select onChange={OnChangeAeronave} className="medida" name="aircraft-model" id="aircraft-model" defaultValue={'default'}>
                            <option value="default" disabled>Select aircraft:</option>
                            {aeronaves.map(function (a) {
                                return <option value={a.modelo_de_aeronave}> {a.modelo_de_aeronave}</option>
                            })};
                        </select></div>
                    </>
                    <SelectFlap dados={slopes}></SelectFlap>
                    <SelectIce></SelectIce>
                    <SelectCondicao></SelectCondicao>
                    <InputCadastros min={pesoMin} qtd={pesoMaximo} id="Peso" type="number" placeholder={placeholderWeight} >{tituloPeso}</InputCadastros>
                    <SelectSlope ></SelectSlope>
                    <InputCadastros min="0" id="InputSlope" type="number" placeholder={placeholderSlope}>Slope (%)</InputCadastros>
                    <InputCadastros min="0" id="Alt" type="number" placeholder={placeholderAltitude} >{tituloAltitude}</InputCadastros>
                    <InputCadastros id="Temp" type="number" placeholder={placeholderTemperature}>{tituloTemperature}</InputCadastros>
                    <SelectWind></SelectWind>
                    <InputCadastros min="0" id="Wind" type="number" placeholder={placeholderWind}>{tituloWind}</InputCadastros>
                    {/* <InputCadastros min="0" id="Overspeed" type="number" placeholder="Enter the overspeed">Overspeed</InputCadastros> */}
                    <InputCadastros qtd="10" min="0" id="Reversor" type="number" placeholder="Ex.: 1">Reverser (Un) </InputCadastros>

                </div>


                <div className="button">
                    <input type="submit" onClick={HandleCalcular} value="Calculate" id="calcular" />
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
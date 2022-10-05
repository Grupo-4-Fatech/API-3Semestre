import "./calculo.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlaneArrival } from '@fortawesome/free-solid-svg-icons'
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
    var numAlt = document.getElementById("Alt").value;
    var numPeso = document.getElementById("Peso").value;
    var numWind = document.getElementById("Wind").value;
    var numReversor = document.getElementById("Reversor").value;
    var numSlope = document.getElementById("InputSlope").value;


    // var teste = e.target.value

    if (numAlt < 0) {
        document.getElementById("Alt").value = 0
        // alert ("a")
        return false
    }
    if (numPeso < 0) {
        document.getElementById("Peso").value = 0
        return false
    }
    if (numWind < 0) {
        document.getElementById("Wind").value = 0
        return false
    }
    if (numReversor < 0) {
        document.getElementById("Reversor").value = 0
        return false
    }
    if (numSlope < 0) {
        document.getElementById("InputSlope").value = 0
        return false
    }
        return true
    

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
            Ice: document.getElementById('slcIce').value == 1 ? false : true,
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
            document.getElementById('result').value = data + "m";
            Swal.fire({
                title: 'Calculation performed successfully',
                text:"You need " + data + "m",
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
            <a href="./home"><FontAwesomeIcon icon={faArrowLeft} /></a>
            <div className="titulo">Landing calculation</div>
            <FontAwesomeIcon icon={faPlaneArrival} />
            <form action="#">
                <div className="detalhes-aeronave">
                    {/* <NativeSelectDemo></NativeSelectDemo> */}
                    {/* {func('bk')} */}
                    {func('flap')}
                    <SelectIce></SelectIce>
                    <SelectCondicao></SelectCondicao>
                    <InputCadastros min="0" id="Peso" type="number" placeholder="Enter the weight" >Weight</InputCadastros>
                    <SelectSlope></SelectSlope>
                    <InputCadastros min="0" id="InputSlope" type="number" placeholder="Enter slope">Slope</InputCadastros>
                    <InputCadastros min="0" id="Alt" type="number" placeholder="Enter the altitude" >Altitude</InputCadastros>
                    <InputCadastros id="Temp" type="number" placeholder="Enter the temperature">Temperature</InputCadastros>
                    <SelectWind></SelectWind>
                    <InputCadastros min="0" id="Wind" type="number" placeholder="Enter wind speed">Wind</InputCadastros>
                    {/* <InputCadastros min="0" id="Overspeed" type="number" placeholder="Enter the overspeed">Overspeed</InputCadastros> */}
                    <InputCadastros qtd="10" min="0" id="Reversor" type="number" placeholder="Enter the reverser">Reverser</InputCadastros>

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
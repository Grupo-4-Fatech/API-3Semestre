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

const func = (tipo) => {

    if (tipo === 'flap') {
        return <SelectFlap></SelectFlap>
    }
    if (tipo === 'bk') {
        return <SelectBk></SelectBk>
    }
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
                    <SelectSlope></SelectSlope>
                    <InputCadastros id="InputSlope" type="number" placeholder="Enter slope">Slope</InputCadastros>
                    <SelectCondicao></SelectCondicao>
                    <InputCadastros min="0" id="Peso" type="number" placeholder="Enter the weight">Weight</InputCadastros>
                    <InputCadastros min="0" id="Altitude-pista-Pouso" type="number" placeholder="Enter the altitude">Altitude</InputCadastros>
                    <InputCadastros id="Temperatura" type="number" placeholder="Enter the temperature">Temperature</InputCadastros>
                    <SelectWind></SelectWind>
                    <InputCadastros min="0" id="Ventos" type="number" placeholder="Enter wind speed">Wind</InputCadastros>
                    <InputCadastros min="0" id="Overspeed" type="number" placeholder="Enter the overspeed">Overspeed</InputCadastros>
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
                    <input type="submit" value="Calculate" />
                </div>
                <div className="input_box">
                    <span className="details">Necessary clue</span>
                    <input type="text" placeholder="Result" disabled="disabled" />
                </div>
            </form>
        </div>


    );
}

export default Calculo;
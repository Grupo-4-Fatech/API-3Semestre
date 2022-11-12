import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlane } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
import React from 'react';
import Logout from '../../componentes/logout/logout';
import InputCadastros from '../../componentes/inputCadastros/inputCadastro';
import "./cadastroFlap.css"

const CadastrarFlap = () => {
    const OnChangeAeronave = () => {
        if (document.getElementById('aircraft-model').value === 'default') {
            return
        }
        fetch("/BuscarAeronave" + "?modelo_de_aeronave=" + document.getElementById('aircraft-model').value, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },

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
    useEffect(() => {
        ListarAeronaves();
    }, [])
    return (

        <div id="cadFlap">
            <Logout></Logout>
            <a href="./home"><FontAwesomeIcon icon={faArrowLeft} /></a>
            <div className="titulo">Flap Registration</div>
            <FontAwesomeIcon icon={faPlane} />
            <form className='#'>

                <div className="detalhes">
                    <><div className="medidas">
                        <label htmlFor="" className="tituloS">Aircraft Model</label>
                        <select onChange={OnChangeAeronave} className="medida" name="aircraft-model" id="aircraft-model" defaultValue={'default'}>
                            <option value="default" disabled>Select aircraft:</option>
                            {aeronaves.map(function (a) {
                                console.log(a)
                                return <option value={a.modelo_de_aeronave}> {a.modelo_de_aeronave}</option>
                            })};
                        </select>
                    </div>
                    </>
                    <InputCadastros id="nomeFlap" type="string" placeholder="Flap">Flap </InputCadastros>

                </div>
                <div className="Reversor-details">
                    <input type="radio" name="tipo-usuario" id="dot-1" value="1" defaultChecked />
                    <input type="radio" name="tipo-usuario" id="dot-2" value="2" />
                    <span className="Reversor-title">Type</span>

                    <div className="category">

                        <label for="dot-1">
                            <span className="dot one" value="1"></span>
                            <span className="reversor" >With ice</span>
                        </label>

                        <label for="dot-2">
                            <span className="dot two" value="2"></span>
                            <span className="reversor" >Without ice</span>
                        </label>

                    </div>

                </div>

                {/* <div id="informacoes">Com gelo</div> */}
                <div className="condPista">Runway Condition 1</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros id="REF" type="" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros id="weightBelow" type="" placeholder="Below">Weight(+)</InputCadastros>
                    <InputCadastros id="weightAbove" type="" placeholder="Above">Weight(-)</InputCadastros>
                    <InputCadastros id="Alt" type="" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros id="tempBelow" type="" placeholder="Below">TEMP(ISA+)</InputCadastros>
                    <InputCadastros id="tempAbove" type="" placeholder="Above">TEMP(ISA-)</InputCadastros>
                    <InputCadastros id="headWind" type="" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros id="tailWind" type="" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros id="slopUp" type="" placeholder="UpHill">Slop(+)</InputCadastros>
                    <InputCadastros id="slopDow" type="" placeholder="DownHill">Slop(-) </InputCadastros>
                    <InputCadastros id="vap" type="" placeholder="Vap">VAP</InputCadastros>
                    <InputCadastros id="rev" type="" placeholder="Rev">REV </InputCadastros>


                </div>
                <div className="condPista">Runway Condition 2</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros id="REF" type="" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros id="weightBelow" type="" placeholder="Below">Weight(+)</InputCadastros>
                    <InputCadastros id="weightAbove" type="" placeholder="Above">Weight(-)</InputCadastros>
                    <InputCadastros id="Alt" type="" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros id="tempBelow" type="" placeholder="Below">TEMP(ISA+)</InputCadastros>
                    <InputCadastros id="tempAbove" type="" placeholder="Above">TEMP(ISA-)</InputCadastros>
                    <InputCadastros id="headWind" type="" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros id="tailWind" type="" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros id="slopUp" type="" placeholder="UpHill">Slop(+)</InputCadastros>
                    <InputCadastros id="slopDow" type="" placeholder="DownHill">Slop(-) </InputCadastros>
                    <InputCadastros id="vap" type="" placeholder="Vap">VAP</InputCadastros>
                    <InputCadastros id="rev" type="" placeholder="Rev">REV </InputCadastros>


                </div>
                <div className="condPista">Runway Condition 3</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros id="REF" type="" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros id="weightBelow" type="" placeholder="Below">Weight(+)</InputCadastros>
                    <InputCadastros id="weightAbove" type="" placeholder="Above">Weight(-)</InputCadastros>
                    <InputCadastros id="Alt" type="" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros id="tempBelow" type="" placeholder="Below">TEMP(ISA+)</InputCadastros>
                    <InputCadastros id="tempAbove" type="" placeholder="Above">TEMP(ISA-)</InputCadastros>
                    <InputCadastros id="headWind" type="" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros id="tailWind" type="" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros id="slopUp" type="" placeholder="UpHill">Slop(+)</InputCadastros>
                    <InputCadastros id="slopDow" type="" placeholder="DownHill">Slop(-) </InputCadastros>
                    <InputCadastros id="vap" type="" placeholder="Vap">VAP</InputCadastros>
                    <InputCadastros id="rev" type="" placeholder="Rev">REV </InputCadastros>


                </div>
                <div className="condPista">Runway Condition 4</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros id="REF" type="" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros id="weightBelow" type="" placeholder="Below">Weight(+)</InputCadastros>
                    <InputCadastros id="weightAbove" type="" placeholder="Above">Weight(-)</InputCadastros>
                    <InputCadastros id="Alt" type="" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros id="tempBelow" type="" placeholder="Below">TEMP(ISA+)</InputCadastros>
                    <InputCadastros id="tempAbove" type="" placeholder="Above">TEMP(ISA-)</InputCadastros>
                    <InputCadastros id="headWind" type="" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros id="tailWind" type="" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros id="slopUp" type="" placeholder="UpHill">Slop(+)</InputCadastros>
                    <InputCadastros id="slopDow" type="" placeholder="DownHill">Slop(-) </InputCadastros>
                    <InputCadastros id="vap" type="" placeholder="Vap">VAP</InputCadastros>
                    <InputCadastros id="rev" type="" placeholder="Rev">REV </InputCadastros>


                </div>
                <div className="condPista">Runway Condition 5</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros id="REF" type="" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros id="weightBelow" type="" placeholder="Below">Weight(+)</InputCadastros>
                    <InputCadastros id="weightAbove" type="" placeholder="Above">Weight(-)</InputCadastros>
                    <InputCadastros id="Alt" type="" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros id="tempBelow" type="" placeholder="Below">TEMP(ISA+)</InputCadastros>
                    <InputCadastros id="tempAbove" type="" placeholder="Above">TEMP(ISA-)</InputCadastros>
                    <InputCadastros id="headWind" type="" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros id="tailWind" type="" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros id="slopUp" type="" placeholder="UpHill">Slop(+)</InputCadastros>
                    <InputCadastros id="slopDow" type="" placeholder="DownHill">Slop(-) </InputCadastros>
                    <InputCadastros id="vap" type="" placeholder="Vap">VAP</InputCadastros>
                    <InputCadastros id="rev" type="" placeholder="Rev">REV </InputCadastros>


                </div>
                <div className="condPista">Runway Condition 6</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros id="REF" type="" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros id="weightBelow" type="" placeholder="Below">Weight(+)</InputCadastros>
                    <InputCadastros id="weightAbove" type="" placeholder="Above">Weight(-)</InputCadastros>
                    <InputCadastros id="Alt" type="" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros id="tempBelow" type="" placeholder="Below">TEMP(ISA+)</InputCadastros>
                    <InputCadastros id="tempAbove" type="" placeholder="Above">TEMP(ISA-)</InputCadastros>
                    <InputCadastros id="headWind" type="" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros id="tailWind" type="" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros id="slopUp" type="" placeholder="UpHill">Slop(+)</InputCadastros>
                    <InputCadastros id="slopDow" type="" placeholder="DownHill">Slop(-) </InputCadastros>
                    <InputCadastros id="vap" type="" placeholder="Vap">VAP</InputCadastros>
                    <InputCadastros id="rev" type="" placeholder="Rev">REV </InputCadastros>


                </div>
                {/* <div id="informacoes">Sem gelo</div>
                <div className="condPista">Condição de pista 1</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros id="REF" type="" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros id="weightBelow" type="" placeholder="Below">Weight(+)</InputCadastros>
                    <InputCadastros id="weightAbove" type="" placeholder="Above">Weight(-)</InputCadastros>
                    <InputCadastros id="Alt" type="" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros id="tempBelow" type="" placeholder="Below">TEMP(ISA+)</InputCadastros>
                    <InputCadastros id="tempAbove" type="" placeholder="Above">TEMP(ISA-)</InputCadastros>
                    <InputCadastros id="headWind" type="" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros id="tailWind" type="" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros id="slopUp" type="" placeholder="UpHill">Slop(+)</InputCadastros>
                    <InputCadastros id="slopDow" type="" placeholder="DownHill">Slop(-) </InputCadastros>
                    <InputCadastros id="vap" type="" placeholder="VAP">VAP</InputCadastros>
                    <InputCadastros id="rev" type="" placeholder="REV">REV </InputCadastros>


                </div>
                <div className="condPista">Condição de pista 2</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros id="REF" type="" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros id="weightBelow" type="" placeholder="Below">Weight(+)</InputCadastros>
                    <InputCadastros id="weightAbove" type="" placeholder="Above">Weight(-)</InputCadastros>
                    <InputCadastros id="Alt" type="" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros id="tempBelow" type="" placeholder="Below">TEMP(ISA+)</InputCadastros>
                    <InputCadastros id="tempAbove" type="" placeholder="Above">TEMP(ISA-)</InputCadastros>
                    <InputCadastros id="headWind" type="" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros id="tailWind" type="" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros id="slopUp" type="" placeholder="UpHill">Slop(+)</InputCadastros>
                    <InputCadastros id="slopDow" type="" placeholder="DownHill">Slop(-) </InputCadastros>
                    <InputCadastros id="vap" type="" placeholder="VAP">VAP</InputCadastros>
                    <InputCadastros id="rev" type="" placeholder="REV">REV </InputCadastros>


                </div>
                <div className="condPista">Condição de pista 3</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros id="REF" type="" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros id="weightBelow" type="" placeholder="Below">Weight(+)</InputCadastros>
                    <InputCadastros id="weightAbove" type="" placeholder="Above">Weight(-)</InputCadastros>
                    <InputCadastros id="Alt" type="" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros id="tempBelow" type="" placeholder="Below">TEMP(ISA+)</InputCadastros>
                    <InputCadastros id="tempAbove" type="" placeholder="Above">TEMP(ISA-)</InputCadastros>
                    <InputCadastros id="headWind" type="" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros id="tailWind" type="" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros id="slopUp" type="" placeholder="UpHill">Slop(+)</InputCadastros>
                    <InputCadastros id="slopDow" type="" placeholder="DownHill">Slop(-) </InputCadastros>
                    <InputCadastros id="vap" type="" placeholder="VAP">VAP</InputCadastros>
                    <InputCadastros id="rev" type="" placeholder="REV">REV </InputCadastros>


                </div>
                <div className="condPista">Condição de pista 4</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros id="REF" type="" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros id="weightBelow" type="" placeholder="Below">Weight(+)</InputCadastros>
                    <InputCadastros id="weightAbove" type="" placeholder="Above">Weight(-)</InputCadastros>
                    <InputCadastros id="Alt" type="" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros id="tempBelow" type="" placeholder="Below">TEMP(ISA+)</InputCadastros>
                    <InputCadastros id="tempAbove" type="" placeholder="Above">TEMP(ISA-)</InputCadastros>
                    <InputCadastros id="headWind" type="" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros id="tailWind" type="" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros id="slopUp" type="" placeholder="UpHill">Slop(+)</InputCadastros>
                    <InputCadastros id="slopDow" type="" placeholder="DownHill">Slop(-) </InputCadastros>
                    <InputCadastros id="vap" type="" placeholder="VAP">VAP</InputCadastros>
                    <InputCadastros id="rev" type="" placeholder="REV">REV </InputCadastros>


                </div>
                <div className="condPista">Condição de pista 5</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros id="REF" type="" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros id="weightBelow" type="" placeholder="Below">Weight(+)</InputCadastros>
                    <InputCadastros id="weightAbove" type="" placeholder="Above">Weight(-)</InputCadastros>
                    <InputCadastros id="Alt" type="" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros id="tempBelow" type="" placeholder="Below">TEMP(ISA+)</InputCadastros>
                    <InputCadastros id="tempAbove" type="" placeholder="Above">TEMP(ISA-)</InputCadastros>
                    <InputCadastros id="headWind" type="" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros id="tailWind" type="" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros id="slopUp" type="" placeholder="UpHill">Slop(+)</InputCadastros>
                    <InputCadastros id="slopDow" type="" placeholder="DownHill">Slop(-) </InputCadastros>
                    <InputCadastros id="vap" type="" placeholder="VAP">VAP</InputCadastros>
                    <InputCadastros id="rev" type="" placeholder="REV">REV </InputCadastros>


                </div>
                <div className="condPista">Condição de pista 6</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros id="REF" type="" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros id="weightBelow" type="" placeholder="Below">Weight(+)</InputCadastros>
                    <InputCadastros id="weightAbove" type="" placeholder="Above">Weight(-)</InputCadastros>
                    <InputCadastros id="Alt" type="" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros id="tempBelow" type="" placeholder="Below">TEMP(ISA+)</InputCadastros>
                    <InputCadastros id="tempAbove" type="" placeholder="Above">TEMP(ISA-)</InputCadastros>
                    <InputCadastros id="headWind" type="" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros id="tailWind" type="" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros id="slopUp" type="" placeholder="UpHill">Slop(+)</InputCadastros>
                    <InputCadastros id="slopDow" type="" placeholder="DownHill">Slop(-) </InputCadastros>
                    <InputCadastros id="vap" type="" placeholder="VAP">VAP</InputCadastros>
                    <InputCadastros id="rev" type="" placeholder="REV">REV </InputCadastros>


                </div> */}
                <div className='button'>
                    <button type="submit">Register</button>
                </div>
            </form>

        </div>
    )
}
export default CadastrarFlap;
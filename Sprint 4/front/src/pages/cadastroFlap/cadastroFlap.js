import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlane } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
import React from 'react';
import Logout from '../../componentes/logout/logout';
import InputCadastros from '../../componentes/inputCadastros/inputCadastro';
import "./cadastroFlap.css"
const Swal = require('sweetalert2')


const CadastrarFlap = () => {

    var handleCadastrarF = function(e){
        e.preventDefault();
        handleCadastrarFlap();
        // handleCadastrarFlaps();
    }

    

    var handleCadastrarFlap = function (e) {

        // e.preventDefault();
var dadosFlap = [];

        for(var n =1; n<=6; n++){
        var dados = {}
        dados.aeronaves = document.getElementById('aircraft-model').value
        // dados.udm = document.getElementById('').value
        dados.flap = document.getElementById('nomeFlap').value
        // dados.ice = document.getElementById('').value
        dados.runway_condicion =  n
        dados.ref = document.getElementById('REF_'+ n).value
        dados.below_weight = document.getElementById('weightBelow_'+ n).value
        dados.above_weight = document.getElementById('weightAbove_'+ n).value
        dados.alt = document.getElementById('Alt_'+ n).value
        dados.below_isa = document.getElementById('tempBelow_'+ n).value
        dados.above_isa = document.getElementById('tempAbove_'+ n).value
        dados.head_wind = document.getElementById('headWind_'+ n).value 
        dados.tall_wind = document.getElementById('tailWind_'+ n).value
        dados.up_hill = document.getElementById('slopUp_'+ n).value 
        dados.down_hill = document.getElementById('slopDow_'+ n).value 
        dados.vap = document.getElementById('vap_'+ n).value 
        dados.rev = document.getElementById('rev_'+ n).value 
        if (document.getElementById('dot-1').checked) {
            dados.ice = 1
        } else if (document.getElementById('dot-2').checked) {
            dados.ice = 2
        }
        dadosFlap.push(dados)
        }


    
            // var dados = {}
            // // dados.aeronaves = document.getElementById('aircraft-model').value
            // // dados.udm = document.getElementById('').value
            // dados.flap = document.getElementById('nomeFlap').value
            // // dados.ice = document.getElementById('').value
            // // dados.runway_condicion =  n
            // dados.ref = document.getElementById('REF_1').value
            // dados.below_weight = document.getElementById('weightBelow_1').value
            // dados.above_weight = document.getElementById('weightAbove_1').value
            // dados.alt = document.getElementById('Alt_1').value
            // dados.below_isa = document.getElementById('tempBelow_1').value
            // dados.above_isa = document.getElementById('tempAbove_1').value
            // dados.head_wind = document.getElementById('headWind_1').value 
            // dados.tall_wind = document.getElementById('tailWind_1').value
            // dados.up_hill = document.getElementById('slopUp_1').value 
            // dados.down_hill = document.getElementById('slopDow_1').value 
            // dados.vap = document.getElementById('vap_1').value 
            // dados.rev = document.getElementById('rev_1').value 
            // if (document.getElementById('dot-1').checked) {
            //     dados.ice = 1
            // } else if (document.getElementById('dot-2').checked) {
            //     dados.ice = 2
            // }
            

        console.log(dadosFlap)
        fetch("/CadastrarFlap", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dadosFlap)
        }).then((resposta) => resposta.json()).then((data) => {

            console.log(data)
            Swal.fire({
                title: data.ok ? 'Flap successfully registered' : "Flap already registered",
                icon: data.ok ? 'success' : "erro",
            }).then((result) => {
                if (result.isConfirmed && data.ok) {
                    window.location.href = '/home';
                }
            })

        })
    }


    var handleCadastrarFlaps = function (e) {

        // e.preventDefault();

        var dados = {}
        dados.flap = document.getElementById('nomeFlap').value
        dados.aeronave = document.getElementById('aircraft-model').value

        console.log(dados)
        fetch("/CadastrarFlaps", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dados)
        }).then((resposta) => resposta.json()).then((data) => {

            Swal.fire({
                title: data.ok ? 'Flap successfully registered' : "Flap already registered",
                icon: data.ok ? 'success' : "erro",
            }).then((result) => {
                if (result.isConfirmed && data.ok) {
                    window.location.href = '/home';
                }
            })

        })
  

    }




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
                    <InputCadastros id="REF_1" type="number" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros id="weightBelow_1" type="number" placeholder="Below">Weight(+)</InputCadastros>
                    <InputCadastros id="weightAbove_1" type="number" placeholder="Above">Weight(-)</InputCadastros>
                    <InputCadastros id="Alt_1" type="number" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros id="tempBelow_1" type="number" placeholder="Below">TEMP(ISA+)</InputCadastros>
                    <InputCadastros id="tempAbove_1" type="number" placeholder="Above">TEMP(ISA-)</InputCadastros>
                    <InputCadastros id="headWind_1" type="number" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros id="tailWind_1" type="number" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros id="slopUp_1" type="number" placeholder="UpHill">Slop(+)</InputCadastros>
                    <InputCadastros id="slopDow_1" type="number" placeholder="DownHill">Slop(-) </InputCadastros>
                    <InputCadastros id="vap_1" type="number" placeholder="Vap">VAP</InputCadastros>
                    <InputCadastros id="rev_1" type="number" placeholder="Rev">REV </InputCadastros>
                    

                </div>
                <div className="condPista">Runway Condition 2</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros id="REF_2" type="number" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros id="weightBelow_2" type="number" placeholder="Below">Weight(+)</InputCadastros>
                    <InputCadastros id="weightAbove_2" type="number" placeholder="Above">Weight(-)</InputCadastros>
                    <InputCadastros id="Alt_2" type="number" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros id="tempBelow_2" type="number" placeholder="Below">TEMP(ISA+)</InputCadastros>
                    <InputCadastros id="tempAbove_2" type="number" placeholder="Above">TEMP(ISA-)</InputCadastros>
                    <InputCadastros id="headWind_2" type="number" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros id="tailWind_2" type="number" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros id="slopUp_2" type="number" placeholder="UpHill">Slop(+)</InputCadastros>
                    <InputCadastros id="slopDow_2" type="number" placeholder="DownHill">Slop(-) </InputCadastros>
                    <InputCadastros id="vap_2" type="number" placeholder="Vap">VAP</InputCadastros>
                    <InputCadastros id="rev_2" type="number" placeholder="Rev">REV </InputCadastros>


                </div>
                <div className="condPista">Runway Condition 3</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros id="REF_3" type="number" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros id="weightBelow_3" type="number" placeholder="Below">Weight(+)</InputCadastros>
                    <InputCadastros id="weightAbove_3" type="number" placeholder="Above">Weight(-)</InputCadastros>
                    <InputCadastros id="Alt_3" type="number" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros id="tempBelow_3" type="number" placeholder="Below">TEMP(ISA+)</InputCadastros>
                    <InputCadastros id="tempAbove_3" type="number" placeholder="Above">TEMP(ISA-)</InputCadastros>
                    <InputCadastros id="headWind_3" type="number" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros id="tailWind_3" type="number" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros id="slopUp_3" type="number" placeholder="UpHill">Slop(+)</InputCadastros>
                    <InputCadastros id="slopDow_3" type="number" placeholder="DownHill">Slop(-) </InputCadastros>
                    <InputCadastros id="vap_3" type="number" placeholder="Vap">VAP</InputCadastros>
                    <InputCadastros id="rev_3" type="number" placeholder="Rev">REV </InputCadastros>


                </div>
                <div className="condPista">Runway Condition 4</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros id="REF_4" type="number" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros id="weightBelow_4" type="number" placeholder="Below">Weight(+)</InputCadastros>
                    <InputCadastros id="weightAbove_4" type="number" placeholder="Above">Weight(-)</InputCadastros>
                    <InputCadastros id="Alt_4" type="number" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros id="tempBelow_4" type="number" placeholder="Below">TEMP(ISA+)</InputCadastros>
                    <InputCadastros id="tempAbove_4" type="number" placeholder="Above">TEMP(ISA-)</InputCadastros>
                    <InputCadastros id="headWind_4" type="number" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros id="tailWind_4" type="number" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros id="slopUp_4" type="number" placeholder="UpHill">Slop(+)</InputCadastros>
                    <InputCadastros id="slopDow_4" type="number" placeholder="DownHill">Slop(-) </InputCadastros>
                    <InputCadastros id="vap_4" type="number" placeholder="Vap">VAP</InputCadastros>
                    <InputCadastros id="rev_4" type="number" placeholder="Rev">REV </InputCadastros>


                </div>
                <div className="condPista">Runway Condition 5</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros id="REF_5" type="number" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros id="weightBelow_5" type="number" placeholder="Below">Weight(+)</InputCadastros>
                    <InputCadastros id="weightAbove_5" type="number" placeholder="Above">Weight(-)</InputCadastros>
                    <InputCadastros id="Alt_5" type="number" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros id="tempBelow_5" type="number" placeholder="Below">TEMP(ISA+)</InputCadastros>
                    <InputCadastros id="tempAbove_5" type="number" placeholder="Above">TEMP(ISA-)</InputCadastros>
                    <InputCadastros id="headWind_5" type="number" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros id="tailWind_5" type="number" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros id="slopUp_5" type="number" placeholder="UpHill">Slop(+)</InputCadastros>
                    <InputCadastros id="slopDow_5" type="number" placeholder="DownHill">Slop(-) </InputCadastros>
                    <InputCadastros id="vap_5" type="number" placeholder="Vap">VAP</InputCadastros>
                    <InputCadastros id="rev_5" type="number" placeholder="Rev">REV </InputCadastros>


                </div>
                <div className="condPista">Runway Condition 6</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros id="REF_6" type="number" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros id="weightBelow_6" type="number" placeholder="Below">Weight(+)</InputCadastros>
                    <InputCadastros id="weightAbove_6" type="number" placeholder="Above">Weight(-)</InputCadastros>
                    <InputCadastros id="Alt_6" type="number" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros id="tempBelow_6" type="number" placeholder="Below">TEMP(ISA+)</InputCadastros>
                    <InputCadastros id="tempAbove_6" type="number" placeholder="Above">TEMP(ISA-)</InputCadastros>
                    <InputCadastros id="headWind_6" type="number" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros id="tailWind_6" type="number" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros id="slopUp_6" type="number" placeholder="UpHill">Slop(+)</InputCadastros>
                    <InputCadastros id="slopDow_6" type="number" placeholder="DownHill">Slop(-) </InputCadastros>
                    <InputCadastros id="vap_6" type="number" placeholder="Vap">VAP</InputCadastros>
                    <InputCadastros id="rev_6" type="number" placeholder="Rev">REV </InputCadastros>


                </div>


                <div className='button'>
                    <button type="submit" onClick={handleCadastrarF}>Register</button>
                </div>
            </form>

        </div>
    )
}
export default CadastrarFlap;
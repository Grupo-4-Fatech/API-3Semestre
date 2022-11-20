import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlane } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
import React from 'react';
import Logout from '../../componentes/logout/logout';
import InputCadastros from '../../componentes/inputCadastros/inputCadastro';

const AtualizarFlap = () => {
    function validarCampoVazioFlap(flap) {
        if (flap.value == null) {
            return false
        }
        if (flap.value === "") {
            return false
        } return true
    }
    function validarCamposVaziosRef(ref1, ref2, ref3, ref4, ref5, ref6) {
        const refs = [ref1, ref2, ref3, ref4, ref5, ref6,]
        let evalido = true
        for (const ref of refs) {
            console.log(ref);
            if (ref.value === null) {
                evalido = false
            }
            if (ref.value === "") {
                evalido = false
            }

        } return evalido
    }
    function validarCamposVaziosWeightBellow(weight1, weight2, weight3, weight4, weight5, weight6) {
        const pesos = [weight1, weight2, weight3, weight4, weight5, weight6,]
        let evalido = true
        for (let peso of pesos) {
            if (peso.value == null) {
                evalido = false
            }
            if (peso.value === "") {
                evalido = false
            }

        } return evalido
    }
    function validarCamposVaziosWeightAbove(weight1, weight2, weight3, weight4, weight5, weight6) {
        const pesos = [weight1, weight2, weight3, weight4, weight5, weight6]
        let evalido = true
        for (let peso of pesos) {
            if (peso.value == null) {
                evalido = false
            }
            if (peso.value === "") {
                evalido = false
            }
        } return evalido
    }
    function validarCamposVaziosAlt(alt1, alt2, alt3, alt4, alt5, alt6) {
        const altitudes = [alt1, alt2, alt3, alt4, alt5, alt6]
        let evalido = true
        for (let altitude of altitudes) {
            if (altitude.value == null) {
                evalido = false
            }
            if (altitude.value === "") {
                evalido = false
            }
        } return evalido
    }
    function validarCamposVaziosTempIsaBellow(temp1, temp2, temp3, temp4, temp5, temp6) {
        const temperaturas = [temp1, temp2, temp3, temp4, temp5, temp6]
        let evalido = true
        for (let temperatura of temperaturas) {
            if (temperatura.value == null) {
                evalido = false
            }
            if (temperatura.value === "") {
                evalido = false
            }
        } return evalido
    }
    function validarCamposVaziosTempIsaAbove(temp1, temp2, temp3, temp4, temp5, temp6) {
        const temperaturas = [temp1, temp2, temp3, temp4, temp5, temp6]
        let evalido = true
        for (let temperatura of temperaturas) {
            if (temperatura.value == null) {
                evalido = false
            }
            if (temperatura.value === "") {
                evalido = false
            }
        } return evalido
    }
    function validarCamposVaziosHead(head1, head2, head3, head4, head5, head6) {
        const headWinds = [head1, head2, head3, head4, head5, head6]
        let evalido = true
        for (let head of headWinds) {
            if (head.value == null) {
                evalido = false
            }
            if (head.value === "") {
                evalido = false
            }
        } return evalido
    }
    function validarCamposVaziosTail(tail1, tail2, tail3, tail4, tail5, tail6) {
        const tailWinds = [tail1, tail2, tail3, tail4, tail5, tail6]
        let evalido = true
        for (let tail of tailWinds) {
            if (tail.value == null) {
                evalido = false
            }
            if (tail.value === "") {
                evalido = false
            }
        } return evalido
    }

    function validarCamposVaziosSlopUphil(up1, up2, up3, up4, up5, up6) {
        const uphils = [up1, up2, up3, up4, up5, up6]
        let evalido = true
        for (let up of uphils) {
            if (up.value == null) {
                evalido = false
            }
            if (up.value === "") {
                evalido = false
            }
        } return evalido

    }

    function validarCamposVaziosSlopDowHil(dow1, dow2, dow3, dow4, dow5, dow6) {
        const dowhils = [dow1, dow2, dow3, dow4, dow5, dow6]
        let evalido = true
        for (let up of dowhils) {
            if (up.value == null) {
                evalido = false
            }
            if (up.value === "") {
                evalido = false
            }
        } return evalido

    }

    function validarCamposVaziosVap(vap1, vap2, vap3, vap4, vap5, vap6) {
        const vaps = [vap1, vap2, vap3, vap4, vap5, vap6]
        let evalido = true
        for (let vap of vaps) {
            if (vap.value == null) {
                evalido = false
            }
            if (vap.value === "") {
                evalido = false
            }
        } return evalido

    }

    function validarCamposVaziosRev(rev1, rev2, rev3, rev4, rev5, rev6) {
        const revs = [rev1, rev2, rev3, rev4, rev5, rev6]
        let evalido = true
        for (let rev of revs) {
            if (rev.value == null) {
                evalido = false
            }
            if (rev.value === "") {
                evalido = false
            }
        } return evalido

    }
    function validarCamposNegativos(weight1, weight2, weight3, weight4, weight5, weight6, head1, head2, head3, head4, head5, head6, temp1, temp2, temp3, temp4, temp5, temp6, up1, up2, up3, up4, up5, up6) {
        const negativos = [weight1, weight2, weight3, weight4, weight5, weight6, head1, head2, head3, head4, head5, head6, temp1, temp2, temp3, temp4, temp5, temp6, up1, up2, up3, up4, up5, up6]
        let evalido = true
        for (let negativo of negativos) {
            if (negativo.value >= 0) {
                evalido = false
                negativo.value = -1
            }
        } return evalido
    }
    function validarCamposPositivos(ref1, ref2, ref3, ref4, ref5, ref6, weight1, weight2, weight3, weight4, weight5, weight6, alt1, alt2, alt3, alt4, alt5, alt6, temp1, temp2, temp3, temp4, temp5, temp6, tail1, tail2, tail3, tail4, tail5, tail6, dow1, dow2, dow3, dow4, dow5, dow6, vap1, vap2, vap3, vap4, vap5, vap6, rev1, rev2, rev3, rev4, rev5, rev6) {
        const positivos = [ref1, ref2, ref3, ref4, ref5, ref6, weight1, weight2, weight3, weight4, weight5, weight6, alt1, alt2, alt3, alt4, alt5, alt6, temp1, temp2, temp3, temp4, temp5, temp6, tail1, tail2, tail3, tail4, tail5, tail6, dow1, dow2, dow3, dow4, dow5, dow6, vap1, vap2, vap3, vap4, vap5, vap6, rev1, rev2, rev3, rev4, rev5, rev6]
        let evalido = true
        for (let positivo of positivos) {
            if (positivo.value < 0) {
                evalido = false
                positivo.value = 0
            }
        } return evalido
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
            <div className="titulo">Update Flap</div>
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
                    <button type="submit" >Update</button>
                </div>
            </form>

        </div>
    )
}
export default AtualizarFlap;

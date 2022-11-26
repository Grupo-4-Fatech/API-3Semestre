import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlane } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import React from 'react';
import Logout from '../../componentes/logout/logout';
import InputCadastros from '../../componentes/inputCadastros/inputCadastro';
const Swal = require('sweetalert2')

const AtualizarFlap = () => {
    let location = useNavigate()
    function voltar() {
        location(-1)

    }
    function validarCampoPositivo(event) {
        if (event.target.value < 0) {
            event.target.value = 0
        }
    }
    function validarCampoNegativo(event) {
        if (event.target.value > 0) {
            event.target.value = 0
        }
    }
    function validarCamposVaziosRef(ref1, ref2, ref3, ref4, ref5, ref6) {
        const refs = [ref1, ref2, ref3, ref4, ref5, ref6,]
        let evalido = true
        for (const ref of refs) {
            console.log(ref);
            if (ref === null) {
                evalido = false
            }
            if (ref === "") {
                evalido = false
            }

        } return evalido
    }
    function maxRef(ref1, ref2, ref3, ref4, ref5, ref6) {
        const refs = [ref1, ref2, ref3, ref4, ref5, ref6,]
        let evalido = true
        for (const ref of refs) {
            console.log(ref);
            if (ref > 4000) {
                evalido = false
            }
        } return evalido
    }
    function validarCamposVaziosWeightBellow(weight1, weight2, weight3, weight4, weight5, weight6) {
        const pesos = [weight1, weight2, weight3, weight4, weight5, weight6]
        let evalido = true
        for (const peso of pesos) {
            if (peso === null) {
                evalido = false
            }
            if (peso === "") {
                evalido = false
            }

        } return evalido
    }
    function maxWeightbellow(weight1, weight2, weight3, weight4, weight5, weight6) {
        const pesos = [weight1, weight2, weight3, weight4, weight5, weight6]
        let evalido = true
        for (let peso of pesos) {
            if (peso < -100) {
                evalido = false
            }

        } return evalido
    }

    function validarCamposVaziosWeightAbove(weight1, weight2, weight3, weight4, weight5, weight6) {
        const pesos = [weight1, weight2, weight3, weight4, weight5, weight6]
        let evalido = true
        for (let peso of pesos) {
            if (peso === null) {
                evalido = false
            }
            if (peso === "") {
                evalido = false
            }
        } return evalido
    }
    function maxWeightAbove(weight1, weight2, weight3, weight4, weight5, weight6) {
        const pesos = [weight1, weight2, weight3, weight4, weight5, weight6]
        let evalido = true
        for (let peso of pesos) {
            if (peso > 100) {
                evalido = false
            }

        } return evalido
    }
    function validarCamposVaziosAlt(alt1, alt2, alt3, alt4, alt5, alt6) {
        const altitudes = [alt1, alt2, alt3, alt4, alt5, alt6]
        let evalido = true
        for (let altitude of altitudes) {
            if (altitude === null) {
                evalido = false
            }
            if (altitude === "") {
                evalido = false
            }
        } return evalido
    }
    function maxAlt(alt1, alt2, alt3, alt4, alt5, alt6) {
        const altitudes = [alt1, alt2, alt3, alt4, alt5, alt6]
        let evalido = true
        for (let altitude of altitudes) {
            if (altitude > 100) {
                evalido = false
            }
        } return evalido

    }
    function validarCamposVaziosTempIsaBellow(temp1, temp2, temp3, temp4, temp5, temp6) {
        const temperaturas = [temp1, temp2, temp3, temp4, temp5, temp6]
        let evalido = true
        for (let temperatura of temperaturas) {
            if (temperatura === null) {
                evalido = false
            }
            if (temperatura === "") {
                evalido = false
            }
        } return evalido
    }
    function maxTempBellow(temp1, temp2, temp3, temp4, temp5, temp6) {
        const temperaturas = [temp1, temp2, temp3, temp4, temp5, temp6]
        let evalido = true
        for (let temperatura of temperaturas) {
            if (temperatura < -30) {
                evalido = false
            }

        } return evalido

    }
    function validarCamposVaziosTempIsaAbove(temp1, temp2, temp3, temp4, temp5, temp6) {
        const temperaturas = [temp1, temp2, temp3, temp4, temp5, temp6]
        let evalido = true
        for (let temperatura of temperaturas) {
            if (temperatura === null) {
                evalido = false
            }
            if (temperatura === "") {
                evalido = false
            }
        } return evalido
    }
    function maxTempAbove(temp1, temp2, temp3, temp4, temp5, temp6) {
        const temperaturas = [temp1, temp2, temp3, temp4, temp5, temp6]
        let evalido = true
        for (let temperatura of temperaturas) {
            if (temperatura > 70) {
                evalido = false
            }

        } return evalido
    }
    function validarCamposVaziosHead(head1, head2, head3, head4, head5, head6) {
        const headWinds = [head1, head2, head3, head4, head5, head6]
        let evalido = true
        for (let head of headWinds) {
            if (head === null) {
                evalido = false
            }
            if (head === "") {
                evalido = false
            }
        } return evalido
    }
    function maxHead(head1, head2, head3, head4, head5, head6) {
        const headWinds = [head1, head2, head3, head4, head5, head6]
        let evalido = true
        for (let head of headWinds) {
            if (head < -60) {
                evalido = false
            }
        } return evalido
    }
    function validarCamposVaziosTail(tail1, tail2, tail3, tail4, tail5, tail6) {
        const tailWinds = [tail1, tail2, tail3, tail4, tail5, tail6]
        let evalido = true
        for (let tail of tailWinds) {
            if (tail === null) {
                evalido = false
            }
            if (tail === "") {
                evalido = false
            }
        } return evalido
    }
    function maxTail(tail1, tail2, tail3, tail4, tail5, tail6) {
        const tailWinds = [tail1, tail2, tail3, tail4, tail5, tail6]
        let evalido = true
        for (let tail of tailWinds) {
            if (tail > 300) {
                evalido = false
            }
        } return evalido

    }
    function validarCamposVaziosSlopUphil(up1, up2, up3, up4, up5, up6) {
        const uphils = [up1, up2, up3, up4, up5, up6]
        let evalido = true
        for (let up of uphils) {
            if (up === null) {
                evalido = false
            }
            if (up === "") {
                evalido = false
            }
        } return evalido

    }
    function maxUphil(up1, up2, up3, up4, up5, up6) {
        const uphils = [up1, up2, up3, up4, up5, up6]
        let evalido = true
        for (let up of uphils) {
            if (up < -40) {
                evalido = false
            }
        } return evalido
    }
    function validarCamposVaziosSlopDowHil(dow1, dow2, dow3, dow4, dow5, dow6) {
        const dowhils = [dow1, dow2, dow3, dow4, dow5, dow6]
        let evalido = true
        for (let up of dowhils) {
            if (up === null) {
                evalido = false
            }
            if (up === "") {
                evalido = false
            }
        } return evalido

    }
    function maxDownHil(dow1, dow2, dow3, dow4, dow5, dow6) {
        const dowhils = [dow1, dow2, dow3, dow4, dow5, dow6]
        let evalido = true
        for (let up of dowhils) {
            if (up > 400) {
                evalido = false
            }
        } return evalido

    }

    function validarCamposVaziosVap(vap1, vap2, vap3, vap4, vap5, vap6) {
        const vaps = [vap1, vap2, vap3, vap4, vap5, vap6]
        let evalido = true
        for (let vap of vaps) {
            if (vap === null) {
                evalido = false
            }
            if (vap === "") {
                evalido = false
            }
        } return evalido

    }
    function maxVap(vap1, vap2, vap3, vap4, vap5, vap6) {
        const vaps = [vap1, vap2, vap3, vap4, vap5, vap6]
        let evalido = true
        for (let vap of vaps) {
            if (vap > 150) {
                evalido = false
            }
        } return evalido
    }

    function validarCamposVaziosRev(rev1, rev2, rev3, rev4, rev5, rev6) {
        const revs = [rev1, rev2, rev3, rev4, rev5, rev6]
        let evalido = true
        for (let rev of revs) {
            if (rev === null) {
                evalido = false
            }
            if (rev === "") {
                evalido = false
            }
        } return evalido

    }
    function maxRev(rev1, rev2, rev3, rev4, rev5, rev6) {
        const revs = [rev1, rev2, rev3, rev4, rev5, rev6]
        let evalido = true
        for (let rev of revs) {
            if (rev > 1550) {
                evalido = false
            }
        } return evalido

    }


    var handleAtualizarFlap = function (e) {
        e.preventDefault();
        var dadosFlap = []
        var string = window.location.href;
        string = string.substring(window.location.href.indexOf("id=") + 3, string.length);
        for (var n = 1; n <= 6; n++) {
            var dados = {}
            dados.id = string
            dados.aeronaves = document.getElementById('aircraft-model').value
            dados.flap = document.getElementById('nomeFlap').value
            dados.runway_condicion = n
            dados.ref = document.getElementById('REF_' + n).value
            dados.below_weight = document.getElementById('weightBelow_' + n).value
            dados.above_weight = document.getElementById('weightAbove_' + n).value
            dados.alt = document.getElementById('Alt_' + n).value
            dados.below_isa = document.getElementById('tempBelow_' + n).value
            dados.above_isa = document.getElementById('tempAbove_' + n).value
            dados.head_wind = document.getElementById('headWind_' + n).value
            dados.tall_wind = document.getElementById('tailWind_' + n).value
            dados.up_hill = document.getElementById('slopUp_' + n).value
            dados.down_hill = document.getElementById('slopDow_' + n).value
            dados.vap = document.getElementById('vap_' + n).value
            dados.rev = document.getElementById('rev_' + n).value
            if (document.getElementById('dot-1').checked) {
                dados.ice = 1
            } else if (document.getElementById('dot-2').checked) {
                dados.ice = 2
            }
            dadosFlap.push(dados)
            if (!validarCamposVaziosRef(dados.ref)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Ref cannot be empty',
                    text: '',
                })
                return true
            }
            if (!maxRef(dados.ref)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Ref cannot be more than 4000',
                    text: '',
                })
                return true
            }

            if (!validarCamposVaziosWeightBellow(dados.below_weight)) {
                console.log(dados.below_weight);
                Swal.fire({
                    icon: 'error',
                    title: 'Weight(-) cannot be empty',
                    text: '',
                })
                return true
            }
            if (!maxWeightbellow(dados.below_weight)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Weight (-) cannot be less than -100',

                })
                return true
            }
            if (!validarCamposVaziosWeightAbove(dados.above_weight)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Weight(+) cannot be empty',
                    text: '',
                })
                return true
            }
            if (!maxWeightAbove(dados.above_weight)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Weight (+) cannot be more than 100',

                })
                return true
            }
            if (!validarCamposVaziosAlt(dados.alt)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Alt cannot be empty',
                    text: '',
                })
                return true
            }
            if (!maxAlt(dados.alt)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Alt cannot be more than 100',

                })
                return true
            }
            if (!validarCamposVaziosTempIsaBellow(dados.below_isa)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Temp(Isa-) cannot be empty',
                    text: '',
                })
                return true
            }
            if (!maxTempBellow(dados.below_isa)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Temp(ISA-) cannot be less than -30',

                })
                return true
            }
            if (!validarCamposVaziosTempIsaAbove(dados.above_isa)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Temp(Isa+) cannot be empty',
                    text: '',
                })
                return true
            }
            if (!maxTempAbove(dados.above_isa)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Temp(ISA+) cannot be more than 70',

                })
                return true
            }
            if (!validarCamposVaziosHead(dados.head_wind)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Head Wind cannot be empty',
                    text: '',
                })
                return true
            }
            if (!maxHead(dados.head_wind)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Head Wind cannot be les than -60',

                })
                return true
            }
            if (!validarCamposVaziosTail(dados.tall_wind)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Tail Wind cannot be empty',
                    text: '',
                })
                return true
            }
            if (!maxTail(dados.tall_wind)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Tail Wind cannot be more than 300',

                })
                return true
            }
            if (!validarCamposVaziosSlopUphil(dados.up_hill)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Slop(-) cannot be empty',
                    text: '',
                })
                return true
            }
            if (!maxUphil(dados.up_hill)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Slop(-) cannot be less than -40',

                })
                return true
            }
            if (!validarCamposVaziosSlopDowHil(dados.down_hill)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Slop(+) cannot be empty',
                    text: '',
                })
                return true
            }
            if (!maxDownHil(dados.down_hill)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Slop(+) cannot be more than 400',

                })
                return true
            }
            if (!validarCamposVaziosVap(dados.vap)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Vap cannot be empty',
                    text: '',
                })
                return true
            }
            if (!maxVap(dados.vap)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Vap cannot be more than 150',

                })
                return true
            }
            if (!validarCamposVaziosRev(dados.rev)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Rev cannot be empty',
                    text: '',
                })
                return true
            }
            if (!maxRev(dados.rev)) {
                Swal.fire({
                    icon: 'error',
                    title: 'Rev cannot be more than 1550',

                })
                return true
            }



        }
        console.log(dados)
        fetch("/AtualizarFlap", {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(dadosFlap)
        }).then((resposta) => resposta.json()).then((data) => {
            console.log(data)
            Swal.fire({
                icon: data.ok ? 'success' : 'error',
                title: data.ok ? 'SUCCESS' : 'ERROR',
                text: data.ok ? 'Aircraft updated successfuly' : 'Error updating the Flaps',
            }).then(() => {
                if (data.ok) {
                    window.location.href = '/Consulta-Flap';
                }

            })
        })
    }
    const [dadosParametrosIce, setDadosParametrosIce] = useState([]);
    const [dadosParametrosSem, setDadosParametrosSem] = useState([]);
    useEffect(() => {

        var string = window.location.href;
        string = string.substring(window.location.href.indexOf("id=") + 3, string.length);
        fetch("/BuscarFlapParametros" + "?id=" + string, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },

        }).then((resposta) => resposta.json()).then((dados) => {

            var t = 1

            var dadosIce = dados.filter(item => item.ice == 1)
            var dadosSemIce = dados.filter(item => item.ice == 2)
            console.log()
            setDadosParametrosIce(dadosIce)
            setDadosParametrosSem(dadosSemIce)
            dados = dadosIce
            for (var n = 0; n < dados.length; n++) {
                if (t == 7) {
                    t = 6
                }

                console.log(t)
                dados.sort((a, b) => {
                    return a.runway_condicion - b.runway_condicion
                })
                document.getElementById('aircraft-model').value = dados[n].aeronaves
                document.getElementById('nomeFlap').value = dados[n].flap
                // dados.ice = document.getElementById('').value
                dados.runway_condicion = t
                document.getElementById('REF_' + t).value = dados[n].ref
                // dados.ref = document.getElementById('REF_2').value

                document.getElementById('weightBelow_' + t).value = dados[n].below_weight
                document.getElementById('weightAbove_' + t).value = dados[n].above_weight
                document.getElementById('Alt_' + t).value = dados[n].alt
                document.getElementById('tempBelow_' + t).value = dados[n].below_isa
                document.getElementById('tempAbove_' + t).value = dados[n].above_isa
                document.getElementById('headWind_' + t).value = dados[n].head_wind
                document.getElementById('tailWind_' + t).value = dados[n].tall_wind
                document.getElementById('slopUp_' + t).value = dados[n].up_hill
                document.getElementById('slopDow_' + t).value = dados[n].down_hill
                document.getElementById('vap_' + t).value = dados[n].vap
                document.getElementById('rev_' + t).value = dados[n].rev
                if (dados[n].ice = 1) {
                    document.getElementById('dot-1').checked = true;
                    dados.ice = 1
                } else if (dados[n].ice = 2) {
                    document.getElementById('dot-2').checked = true;
                    dados.ice = 2
                }
                t++
            }
        })
    }, []);
    var onChangeIce = function () {
        if (document.getElementById('dot-1').checked) {
            let t = 1
            let dados = dadosParametrosIce
            for (var n = 0; n < dados.length; n++) {
                if (t == 7) {
                    t = 6
                }

                console.log('com')
                dados.sort((a, b) => {
                    return a.runway_condicion - b.runway_condicion
                })

                // dados.ice = document.getElementById('').value

                document.getElementById('REF_' + t).value = dados[n].ref
                // dados.ref = document.getElementById('REF_2').value

                document.getElementById('weightBelow_' + t).value = dados[n].below_weight
                document.getElementById('weightAbove_' + t).value = dados[n].above_weight
                document.getElementById('Alt_' + t).value = dados[n].alt
                document.getElementById('tempBelow_' + t).value = dados[n].below_isa
                document.getElementById('tempAbove_' + t).value = dados[n].above_isa
                document.getElementById('headWind_' + t).value = dados[n].head_wind
                document.getElementById('tailWind_' + t).value = dados[n].tall_wind
                document.getElementById('slopUp_' + t).value = dados[n].up_hill
                document.getElementById('slopDow_' + t).value = dados[n].down_hill
                document.getElementById('vap_' + t).value = dados[n].vap
                document.getElementById('rev_' + t).value = dados[n].rev

                t++
            }
        } else {
            console.log("sem")
            let t = 1
            let dados = dadosParametrosSem
            console.log(dados)
            for (var n = 0; n < dados.length; n++) {
                if (t == 7) {
                    t = 6
                }

                console.log("sem")
                dados.sort((a, b) => {
                    return a.runway_condicion - b.runway_condicion
                })

                // dados.ice = document.getElementById('').value

                document.getElementById('REF_' + t).value = dados[n].ref
                // dados.ref = document.getElementById('REF_2').value

                document.getElementById('weightBelow_' + t).value = dados[n].below_weight
                document.getElementById('weightAbove_' + t).value = dados[n].above_weight
                document.getElementById('Alt_' + t).value = dados[n].alt
                document.getElementById('tempBelow_' + t).value = dados[n].below_isa
                document.getElementById('tempAbove_' + t).value = dados[n].above_isa
                document.getElementById('headWind_' + t).value = dados[n].head_wind
                document.getElementById('tailWind_' + t).value = dados[n].tall_wind
                document.getElementById('slopUp_' + t).value = dados[n].up_hill
                document.getElementById('slopDow_' + t).value = dados[n].down_hill
                document.getElementById('vap_' + t).value = dados[n].vap
                document.getElementById('rev_' + t).value = dados[n].rev

                t++
            }
        }
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
            <FontAwesomeIcon icon={faArrowLeft} onClick={voltar} />
            <div className="titulo">Update Flap</div>
            <FontAwesomeIcon icon={faPlane} />
            <form className='#'>
                <div className="detalhes">
                    <><div className="medidas">


                        <label htmlFor="" className="tituloS">Aircraft Model</label>
                        <select disabled onChange={OnChangeAeronave} className="medida" name="aircraft-model" id="aircraft-model" defaultValue={'default'}>
                            <option value="default" disabled>Select aircraft:</option>
                            {aeronaves.map(function (a) {
                                console.log(a)
                                return <option value={a.modelo_de_aeronave}> {a.modelo_de_aeronave}</option>
                            })};
                        </select>

                    </div>
                    </>
                    <InputCadastros disabled id="nomeFlap" type="string" placeholder="Flap">Flap </InputCadastros>

                </div>



                <div className="Reversor-details">
                    <input type="radio" onClick={onChangeIce} name="tipo-usuario" id="dot-1" value="1" defaultChecked />
                    <input type="radio" onClick={onChangeIce} name="tipo-usuario" id="dot-2" value="2" />
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
                    <InputCadastros onInput={validarCampoPositivo} id="REF_1" type="number" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="weightBelow_1" type="number" placeholder="Below">Weight(-)</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="weightAbove_1" type="number" placeholder="Above">Weight(+)</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="Alt_1" type="number" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="tempBelow_1" type="number" placeholder="Below">TEMP(ISA-)</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="tempAbove_1" type="number" placeholder="Above">TEMP(ISA+)</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="headWind_1" type="number" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="tailWind_1" type="number" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="slopUp_1" type="number" placeholder="UpHill">Slop(-)</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="slopDow_1" type="number" placeholder="DownHill">Slop(+) </InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="vap_1" type="number" placeholder="Vap">VAP</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="rev_1" type="number" placeholder="Rev">REV </InputCadastros>


                </div>
                <div className="condPista">Runway Condition 2</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros onInput={validarCampoPositivo} id="REF_2" type="number" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="weightBelow_2" type="number" placeholder="Below">Weight(-)</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="weightAbove_2" type="number" placeholder="Above">Weight(+)</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="Alt_2" type="number" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="tempBelow_2" type="number" placeholder="Below">TEMP(ISA-)</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="tempAbove_2" type="number" placeholder="Above">TEMP(ISA+)</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="headWind_2" type="number" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="tailWind_2" type="number" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="slopUp_2" type="number" placeholder="UpHill">Slop(-)</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="slopDow_2" type="number" placeholder="DownHill">Slop(+) </InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="vap_2" type="number" placeholder="Vap">VAP</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="rev_2" type="number" placeholder="Rev">REV </InputCadastros>


                </div>
                <div className="condPista">Runway Condition 3</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros onInput={validarCampoPositivo} id="REF_3" type="number" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="weightBelow_3" type="number" placeholder="Below">Weight(-)</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="weightAbove_3" type="number" placeholder="Above">Weight(+)</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="Alt_3" type="number" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="tempBelow_3" type="number" placeholder="Below">TEMP(ISA-)</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="tempAbove_3" type="number" placeholder="Above">TEMP(ISA+)</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="headWind_3" type="number" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="tailWind_3" type="number" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="slopUp_3" type="number" placeholder="UpHill">Slop(-)</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="slopDow_3" type="number" placeholder="DownHill">Slop(+) </InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="vap_3" type="number" placeholder="Vap">VAP</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="rev_3" type="number" placeholder="Rev">REV </InputCadastros>

                </div>
                <div className="condPista">Runway Condition 4</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros onInput={validarCampoPositivo} id="REF_4" type="number" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="weightBelow_4" type="number" placeholder="Below">Weight(-)</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="weightAbove_4" type="number" placeholder="Above">Weight(+)</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="Alt_4" type="number" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="tempBelow_4" type="number" placeholder="Below">TEMP(ISA-)</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="tempAbove_4" type="number" placeholder="Above">TEMP(ISA+)</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="headWind_4" type="number" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="tailWind_4" type="number" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="slopUp_4" type="number" placeholder="UpHill">Slop(-)</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="slopDow_4" type="number" placeholder="DownHill">Slop(+) </InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="vap_4" type="number" placeholder="Vap">VAP</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="rev_4" type="number" placeholder="Rev">REV </InputCadastros>


                </div>
                <div className="condPista">Runway Condition 5</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros onInput={validarCampoPositivo} id="REF_5" type="number" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="weightBelow_5" type="number" placeholder="Below">Weight(-)</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="weightAbove_5" type="number" placeholder="Above">Weight(+)</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="Alt_5" type="number" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="tempBelow_5" type="number" placeholder="Below">TEMP(ISA-)</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="tempAbove_5" type="number" placeholder="Above">TEMP(ISA+)</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="headWind_5" type="number" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="tailWind_5" type="number" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="slopUp_5" type="number" placeholder="UpHill">Slop(-)</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="slopDow_5" type="number" placeholder="DownHill">Slop(+) </InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="vap_5" type="number" placeholder="Vap">VAP</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="rev_5" type="number" placeholder="Rev">REV </InputCadastros>


                </div>
                <div className="condPista">Runway Condition 6</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros onInput={validarCampoPositivo} id="REF_6" type="number" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="weightBelow_6" type="number" placeholder="Below">Weight(-)</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="weightAbove_6" type="number" placeholder="Above">Weight(+)</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="Alt_6" type="number" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="tempBelow_6" type="number" placeholder="Below">TEMP(ISA-)</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="tempAbove_6" type="number" placeholder="Above">TEMP(ISA+)</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="headWind_6" type="number" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="tailWind_6" type="number" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros onInput={validarCampoNegativo} id="slopUp_6" type="number" placeholder="UpHill">Slop(-)</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="slopDow_6" type="number" placeholder="DownHill">Slop(+) </InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="vap_6" type="number" placeholder="Vap">VAP</InputCadastros>
                    <InputCadastros onInput={validarCampoPositivo} id="rev_6" type="number" placeholder="Rev">REV </InputCadastros>


                </div>


                <div className='button'>
                    <button type="submit" onClick={handleAtualizarFlap}>Update</button>
                </div>
            </form>

        </div>
    )
}
// onClick={handleAtualizarFlap}

export default AtualizarFlap;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlane } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
import React from 'react';
import Logout from '../../componentes/logout/logout';
import InputCadastros from '../../componentes/inputCadastros/inputCadastro';
import "./cadastroFlap.css"

const Swal = require('sweetalert2')


const CadastrarFlap2 = () => {
    function validarSelect(e) {
        const model = document.getElementById("aircraft-model")
        if (model.value === "default") {
            return false
        } return true
    }
    function validarCampoVazioFlap(e) {
        const flap = document.getElementById("nomeFlap")
        if (flap.value == null) {
            return false
        }
        if (flap.value === "") {
            return false
        } return true
    }


    function validarCamposVaziosRef(e) {
        const ref1 = document.getElementById("REF_1");
        const ref2 = document.getElementById("REF_2");
        const ref3 = document.getElementById("REF_3");
        const ref4 = document.getElementById("REF_4");
        const ref5 = document.getElementById("REF_5");
        const ref6 = document.getElementById("REF_6");
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
    function maxRefs(e) {
        const ref1 = document.getElementById("REF_1");
        const ref2 = document.getElementById("REF_2");
        const ref3 = document.getElementById("REF_3");
        const ref4 = document.getElementById("REF_4");
        const ref5 = document.getElementById("REF_5");
        const ref6 = document.getElementById("REF_6");
        const refs = [ref1, ref2, ref3, ref4, ref5, ref6,]
        let evalido = true
        for (const ref of refs) {
            console.log(ref);
            if (ref.value > 4000) {
                ref.value = 4000
                evalido = false
            }
        } return evalido
    }
    function validarCamposVaziosWeightBellow(e) {
        const weight1 = document.getElementById("weightBelow_1")
        const weight2 = document.getElementById("weightBelow_2")
        const weight3 = document.getElementById("weightBelow_3")
        const weight4 = document.getElementById("weightBelow_4")
        const weight5 = document.getElementById("weightBelow_5")
        const weight6 = document.getElementById("weightBelow_6")
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
    function maxWeightBellow(e) {
        const weight1 = document.getElementById("weightBelow_1")
        const weight2 = document.getElementById("weightBelow_2")
        const weight3 = document.getElementById("weightBelow_3")
        const weight4 = document.getElementById("weightBelow_4")
        const weight5 = document.getElementById("weightBelow_5")
        const weight6 = document.getElementById("weightBelow_6")
        const pesos = [weight1, weight2, weight3, weight4, weight5, weight6,]
        let evalido = true
        for (let peso of pesos) {
            if (peso.value < -100) {
                peso.value = -100
                evalido = false
            }

        } return evalido
    }

    function validarCamposVaziosWeightAbove(e) {
        const weight1 = document.getElementById("weightAbove_1")
        const weight2 = document.getElementById("weightAbove_2")
        const weight3 = document.getElementById("weightAbove_3")
        const weight4 = document.getElementById("weightAbove_4")
        const weight5 = document.getElementById("weightAbove_5")
        const weight6 = document.getElementById("weightAbove_6")
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
    function maxWeightAbove(e) {
        const weight1 = document.getElementById("weightAbove_1")
        const weight2 = document.getElementById("weightAbove_2")
        const weight3 = document.getElementById("weightAbove_3")
        const weight4 = document.getElementById("weightAbove_4")
        const weight5 = document.getElementById("weightAbove_5")
        const weight6 = document.getElementById("weightAbove_6")
        const pesos = [weight1, weight2, weight3, weight4, weight5, weight6]
        let evalido = true
        for (let peso of pesos) {
            if (peso.value > 100) {
                peso.value = 100
                evalido = false
            }
        } return evalido
    }
    function validarCamposVaziosAlt(e) {
        const alt1 = document.getElementById("Alt_1")
        const alt2 = document.getElementById("Alt_2")
        const alt3 = document.getElementById("Alt_3")
        const alt4 = document.getElementById("Alt_4")
        const alt5 = document.getElementById("Alt_5")
        const alt6 = document.getElementById("Alt_6")
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
    function maxAlt(e) {
        const alt1 = document.getElementById("Alt_1")
        const alt2 = document.getElementById("Alt_2")
        const alt3 = document.getElementById("Alt_3")
        const alt4 = document.getElementById("Alt_4")
        const alt5 = document.getElementById("Alt_5")
        const alt6 = document.getElementById("Alt_6")
        const altitudes = [alt1, alt2, alt3, alt4, alt5, alt6]
        let evalido = true
        for (let altitude of altitudes) {
            if (altitude.value > 100) {
                altitude.value = 100
                evalido = false
            }
        } return evalido
    }

    function validarCamposVaziosTempIsaBellow(e) {
        const temp1 = document.getElementById("tempBelow_1")
        const temp2 = document.getElementById("tempBelow_2")
        const temp3 = document.getElementById("tempBelow_3")
        const temp4 = document.getElementById("tempBelow_4")
        const temp5 = document.getElementById("tempBelow_5")
        const temp6 = document.getElementById("tempBelow_6")
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
    function maxTempBellow(e) {
        const temp1 = document.getElementById("tempBelow_1")
        const temp2 = document.getElementById("tempBelow_2")
        const temp3 = document.getElementById("tempBelow_3")
        const temp4 = document.getElementById("tempBelow_4")
        const temp5 = document.getElementById("tempBelow_5")
        const temp6 = document.getElementById("tempBelow_6")
        const temperaturas = [temp1, temp2, temp3, temp4, temp5, temp6]
        let evalido = true
        for (let temperatura of temperaturas) {
            if (temperatura.value < -30) {
                temperatura.value = -30
                evalido = false
            }

        } return evalido
    }
    function validarCamposVaziosTempIsaAbove(e) {
        const temp1 = document.getElementById("tempAbove_1")
        const temp2 = document.getElementById("tempAbove_2")
        const temp3 = document.getElementById("tempAbove_3")
        const temp4 = document.getElementById("tempAbove_4")
        const temp5 = document.getElementById("tempAbove_5")
        const temp6 = document.getElementById("tempAbove_6")
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
    function maxTempAbove(e) {
        const temp1 = document.getElementById("tempAbove_1")
        const temp2 = document.getElementById("tempAbove_2")
        const temp3 = document.getElementById("tempAbove_3")
        const temp4 = document.getElementById("tempAbove_4")
        const temp5 = document.getElementById("tempAbove_5")
        const temp6 = document.getElementById("tempAbove_6")
        const temperaturas = [temp1, temp2, temp3, temp4, temp5, temp6]
        let evalido = true
        for (let temperatura of temperaturas) {
            if (temperatura.value > 70) {
                temperatura.value = 70
                evalido = false
            }

        } return evalido
    }
    function validarCamposVaziosHead(e) {
        const head1 = document.getElementById("headWind_1")
        const head2 = document.getElementById("headWind_2")
        const head3 = document.getElementById("headWind_3")
        const head4 = document.getElementById("headWind_4")
        const head5 = document.getElementById("headWind_5")
        const head6 = document.getElementById("headWind_6")
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
    function maxHead(e) {
        const head1 = document.getElementById("headWind_1")
        const head2 = document.getElementById("headWind_2")
        const head3 = document.getElementById("headWind_3")
        const head4 = document.getElementById("headWind_4")
        const head5 = document.getElementById("headWind_5")
        const head6 = document.getElementById("headWind_6")
        const headWinds = [head1, head2, head3, head4, head5, head6]
        let evalido = true
        for (let head of headWinds) {
            if (head.value < -60) {
                head.value = -60
                evalido = false
            }
        } return evalido
    }
    function validarCamposVaziosTail(e) {
        const tail1 = document.getElementById("tailWind_1")
        const tail2 = document.getElementById("tailWind_2")
        const tail3 = document.getElementById("tailWind_3")
        const tail4 = document.getElementById("tailWind_4")
        const tail5 = document.getElementById("tailWind_5")
        const tail6 = document.getElementById("tailWind_6")
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
    function maxTail(e) {
        const tail1 = document.getElementById("tailWind_1")
        const tail2 = document.getElementById("tailWind_2")
        const tail3 = document.getElementById("tailWind_3")
        const tail4 = document.getElementById("tailWind_4")
        const tail5 = document.getElementById("tailWind_5")
        const tail6 = document.getElementById("tailWind_6")
        const tailWinds = [tail1, tail2, tail3, tail4, tail5, tail6]
        let evalido = true
        for (let tail of tailWinds) {
            if (tail.value > 300) {
                tail.value = 300
                evalido = false
            }
        } return evalido
    }

    function validarCamposVaziosSlopUphil(e) {
        const up1 = document.getElementById("slopUp_1")
        const up2 = document.getElementById("slopUp_2")
        const up3 = document.getElementById("slopUp_3")
        const up4 = document.getElementById("slopUp_4")
        const up5 = document.getElementById("slopUp_5")
        const up6 = document.getElementById("slopUp_6")
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
    function maxUphil(e) {
        const up1 = document.getElementById("slopUp_1")
        const up2 = document.getElementById("slopUp_2")
        const up3 = document.getElementById("slopUp_3")
        const up4 = document.getElementById("slopUp_4")
        const up5 = document.getElementById("slopUp_5")
        const up6 = document.getElementById("slopUp_6")
        const uphils = [up1, up2, up3, up4, up5, up6]
        let evalido = true
        for (let up of uphils) {
            if (up.value < -40) {
                up.value = -40
                evalido = false
            }
        } return evalido
    }
    function validarCamposVaziosSlopDowHil(e) {
        const dow1 = document.getElementById("slopDow_1")
        const dow2 = document.getElementById("slopDow_2")
        const dow3 = document.getElementById("slopDow_3")
        const dow4 = document.getElementById("slopDow_4")
        const dow5 = document.getElementById("slopDow_5")
        const dow6 = document.getElementById("slopDow_6")
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
    function maxDownHil(e) {
        const dow1 = document.getElementById("slopDow_1")
        const dow2 = document.getElementById("slopDow_2")
        const dow3 = document.getElementById("slopDow_3")
        const dow4 = document.getElementById("slopDow_4")
        const dow5 = document.getElementById("slopDow_5")
        const dow6 = document.getElementById("slopDow_6")
        const dowhils = [dow1, dow2, dow3, dow4, dow5, dow6]
        let evalido = true
        for (let up of dowhils) {
            if (up.value > 400) {
                up.value = 400
                evalido = false
            }
        } return evalido

    }

    function validarCamposVaziosVap(e) {
        const vap1 = document.getElementById("vap_1")
        const vap2 = document.getElementById("vap_2")
        const vap3 = document.getElementById("vap_3")
        const vap4 = document.getElementById("vap_4")
        const vap5 = document.getElementById("vap_5")
        const vap6 = document.getElementById("vap_6")
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
    function maxVap(e) {
        const vap1 = document.getElementById("vap_1")
        const vap2 = document.getElementById("vap_2")
        const vap3 = document.getElementById("vap_3")
        const vap4 = document.getElementById("vap_4")
        const vap5 = document.getElementById("vap_5")
        const vap6 = document.getElementById("vap_6")
        const vaps = [vap1, vap2, vap3, vap4, vap5, vap6]
        let evalido = true
        for (let vap of vaps) {
            if (vap.value > 150) {
                vap.value = 150
                evalido = false
            }
        } return evalido
    }

    function validarCamposVaziosRev(e) {
        const rev1 = document.getElementById("rev_1")
        const rev2 = document.getElementById("rev_2")
        const rev3 = document.getElementById("rev_3")
        const rev4 = document.getElementById("rev_4")
        const rev5 = document.getElementById("rev_5")
        const rev6 = document.getElementById("rev_6")
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
    function maxRev(e) {
        const rev1 = document.getElementById("rev_1")
        const rev2 = document.getElementById("rev_2")
        const rev3 = document.getElementById("rev_3")
        const rev4 = document.getElementById("rev_4")
        const rev5 = document.getElementById("rev_5")
        const rev6 = document.getElementById("rev_6")
        const revs = [rev1, rev2, rev3, rev4, rev5, rev6]
        let evalido = true
        for (let rev of revs) {
            if (rev.value > 1550) {
                rev.value = 1550
                evalido = false
            }
        } return evalido

    }
    function validarCamposNegativos(e) {
        const weight1 = document.getElementById("weightBelow_1")
        const weight2 = document.getElementById("weightBelow_2")
        const weight3 = document.getElementById("weightBelow_3")
        const weight4 = document.getElementById("weightBelow_4")
        const weight5 = document.getElementById("weightBelow_5")
        const weight6 = document.getElementById("weightBelow_6")
        const temp1 = document.getElementById("tempBelow_1")
        const temp2 = document.getElementById("tempBelow_2")
        const temp3 = document.getElementById("tempBelow_3")
        const temp4 = document.getElementById("tempBelow_4")
        const temp5 = document.getElementById("tempBelow_5")
        const temp6 = document.getElementById("tempBelow_6")
        const head1 = document.getElementById("headWind_1")
        const head2 = document.getElementById("headWind_2")
        const head3 = document.getElementById("headWind_3")
        const head4 = document.getElementById("headWind_4")
        const head5 = document.getElementById("headWind_5")
        const head6 = document.getElementById("headWind_6")
        const up1 = document.getElementById("slopUp_1")
        const up2 = document.getElementById("slopUp_2")
        const up3 = document.getElementById("slopUp_3")
        const up4 = document.getElementById("slopUp_4")
        const up5 = document.getElementById("slopUp_5")
        const up6 = document.getElementById("slopUp_6")
        const negativos = [weight1, weight2, weight3, weight4, weight5, weight6, head1, head2, head3, head4, head5, head6, temp1, temp2, temp3, temp4, temp5, temp6, up1, up2, up3, up4, up5, up6]
        let evalido = true
        for (let negativo of negativos) {
            if (negativo.value > 0) {
                evalido = false
                negativo.value = -1
            }
        } return evalido
    }
    function validarCamposPositivos(e) {
        const ref1 = document.getElementById("REF_1");
        const ref2 = document.getElementById("REF_2");
        const ref3 = document.getElementById("REF_3");
        const ref4 = document.getElementById("REF_4");
        const ref5 = document.getElementById("REF_5");
        const ref6 = document.getElementById("REF_6");
        const weight1 = document.getElementById("weightAbove_1")
        const weight2 = document.getElementById("weightAbove_2")
        const weight3 = document.getElementById("weightAbove_3")
        const weight4 = document.getElementById("weightAbove_4")
        const weight5 = document.getElementById("weightAbove_5")
        const weight6 = document.getElementById("weightAbove_6")
        const alt1 = document.getElementById("Alt_1")
        const alt2 = document.getElementById("Alt_2")
        const alt3 = document.getElementById("Alt_3")
        const alt4 = document.getElementById("Alt_4")
        const alt5 = document.getElementById("Alt_5")
        const alt6 = document.getElementById("Alt_6")
        const temp1 = document.getElementById("tempAbove_1")
        const temp2 = document.getElementById("tempAbove_2")
        const temp3 = document.getElementById("tempAbove_3")
        const temp4 = document.getElementById("tempAbove_4")
        const temp5 = document.getElementById("tempAbove_5")
        const temp6 = document.getElementById("tempAbove_6")
        const tail1 = document.getElementById("tailWind_1")
        const tail2 = document.getElementById("tailWind_2")
        const tail3 = document.getElementById("tailWind_3")
        const tail4 = document.getElementById("tailWind_4")
        const tail5 = document.getElementById("tailWind_5")
        const tail6 = document.getElementById("tailWind_6")
        const dow1 = document.getElementById("slopDow_1")
        const dow2 = document.getElementById("slopDow_2")
        const dow3 = document.getElementById("slopDow_3")
        const dow4 = document.getElementById("slopDow_4")
        const dow5 = document.getElementById("slopDow_5")
        const dow6 = document.getElementById("slopDow_6")
        const vap1 = document.getElementById("vap_1")
        const vap2 = document.getElementById("vap_2")
        const vap3 = document.getElementById("vap_3")
        const vap4 = document.getElementById("vap_4")
        const vap5 = document.getElementById("vap_5")
        const vap6 = document.getElementById("vap_6")
        const rev1 = document.getElementById("rev_1")
        const rev2 = document.getElementById("rev_2")
        const rev3 = document.getElementById("rev_3")
        const rev4 = document.getElementById("rev_4")
        const rev5 = document.getElementById("rev_5")
        const rev6 = document.getElementById("rev_6")
        const positivos = [ref1, ref2, ref3, ref4, ref5, ref6, weight1, weight2, weight3, weight4, weight5, weight6, alt1, alt2, alt3, alt4, alt5, alt6, temp1, temp2, temp3, temp4, temp5, temp6, tail1, tail2, tail3, tail4, tail5, tail6, dow1, dow2, dow3, dow4, dow5, dow6, vap1, vap2, vap3, vap4, vap5, vap6, rev1, rev2, rev3, rev4, rev5, rev6]
        let evalido = true
        for (let positivo of positivos) {
            if (positivo.value < 0) {
                evalido = false
                positivo.value = 0
            }
        } return evalido
    }

    var handleCadastrarF = function (e) {
        e.preventDefault();
        handleCadastrarFlap();

        // handleCadastrarFlaps();
    }

    var handleCadastrarFlap = function (e) {
        if (!validarSelect()) {
            Swal.fire({
                icon: 'error',
                title: 'Select an Aircraft',

            })
            return true
        }

        if (!validarCampoVazioFlap()) {
            Swal.fire({
                icon: 'error',
                title: 'Flap cannot be empty',

            })
            return true
        }
        if (!validarCamposNegativos()) {
            Swal.fire({
                icon: 'error',
                title: 'This fields cannot be positive',
                text: 'Weight(-), Temp(-), Head Wind and Slope(-)',


            })
            return true
        }
        if (!validarCamposPositivos()) {
            Swal.fire({
                icon: 'error',
                title: 'This fields cannot be negative',
                text: 'Ref, Weight(+), Temp(+), Tail Wind, Slope(+), Vap and Ref',


            })
            return true
        }
        if (!validarCamposVaziosRef()) {
            Swal.fire({
                icon: 'error',
                title: 'Ref cannot be empty',

            })
            return true
        }
        if (!maxRefs()) {
            Swal.fire({
                icon: 'error',
                title: 'Ref cannot be more than 4000',

            })
            return true
        }
        if (!validarCamposVaziosWeightBellow()) {
            Swal.fire({
                icon: 'error',
                title: 'Weight (-) cannot be empty',

            })
            return true
        }
        if (!maxWeightBellow()) {
            Swal.fire({
                icon: 'error',
                title: 'Weight (-) cannot be less than -100',

            })
            return true
        }
        if (!validarCamposVaziosWeightAbove()) {
            Swal.fire({
                icon: 'error',
                title: 'Weight (+) cannot be empty',

            })
            return true
        }
        if (!maxWeightAbove()) {
            Swal.fire({
                icon: 'error',
                title: 'Weight (+) cannot be more than 100',

            })
            return true
        }
        
        if (!validarCamposVaziosAlt()) {
            Swal.fire({
                icon: 'error',
                title: 'Alt cannot be empty',

            })
            return true
        }
        if (!maxAlt()) {
            Swal.fire({
                icon: 'error',
                title: 'Alt cannot be more than 100',

            })
            return true
        }
        if (!validarCamposVaziosTempIsaBellow()) {
            Swal.fire({
                icon: 'error',
                title: 'Temp(ISA-) cannot be empty',

            })
            return true
        }
        if (!maxTempBellow()) {
            Swal.fire({
                icon: 'error',
                title: 'Temp(ISA-) cannot be less than -30',

            })
            return true
        }
        if (!validarCamposVaziosTempIsaAbove()) {
            Swal.fire({
                icon: 'error',
                title: 'Temp(ISA+) cannot be empty',

            })
            return true
        }
        if (!maxTempAbove()) {
            Swal.fire({
                icon: 'error',
                title: 'Temp(ISA+) cannot be more than 70',

            })
            return true
        }
        if (!validarCamposVaziosHead()) {
            Swal.fire({
                icon: 'error',
                title: 'Head Wind cannot be empty',

            })
            return true
        }
        if (!maxHead()) {
            Swal.fire({
                icon: 'error',
                title: 'Head Wind cannot be les than -60',

            })
            return true
        }
        if (!validarCamposVaziosTail()) {
            Swal.fire({
                icon: 'error',
                title: 'Tail Wind cannot be empty',

            })
            return true
        }
        if (!maxTail()) {
            Swal.fire({
                icon: 'error',
                title: 'Tail Wind cannot be more than 300',

            })
            return true
        }
        if (!validarCamposVaziosSlopUphil()) {
            Swal.fire({
                icon: 'error',
                title: 'Slop(-) cannot be empty',

            })
            return true
        }
        if (!maxUphil()) {
            Swal.fire({
                icon: 'error',
                title: 'Slop(-) cannot be less than -40',

            })
            return true
        }
        if (!validarCamposVaziosSlopDowHil()) {
            Swal.fire({
                icon: 'error',
                title: 'Slop(+) cannot be empty',

            })
            return true
        }
        if (!maxDownHil()) {
            Swal.fire({
                icon: 'error',
                title: 'Slop(+) cannot be more than 400',

            })
            return true
        }
        if (!validarCamposVaziosVap()) {
            Swal.fire({
                icon: 'error',
                title: 'Vap cannot be empty',

            })
            return true
        }
        if (!maxVap()) {
            Swal.fire({
                icon: 'error',
                title: 'Vap cannot be more than 150',

            })
            return true
        }
        if (!validarCamposVaziosRev()) {
            Swal.fire({
                icon: 'error',
                title: 'Rev cannot be empty',

            })
            return true
        }
        if (!maxRev()) {
            Swal.fire({
                icon: 'error',
                title: 'Rev cannot be more than 1550',

            })
            return true
        }


        // e.preventDefault();
        var dadosFlap = [];

        for (var n = 1; n <= 6; n++) {
            var dados = {}
            
            dados.aeronaves = document.getElementById('aircraft-model').value
            // dados.udm = document.getElementById('').value
            dados.flap = document.getElementById('nomeFlap').value
            // dados.ice = document.getElementById('').value
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
        }


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



    // const OnChangeAeronave = () => {
    //     if (document.getElementById('aircraft-model').value === 'default') {
    //         return
    //     }
    //     fetch("/BuscarAeronave" + "?modelo_de_aeronave=" + document.getElementById('aircraft-model').value, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json;charset=utf-8'
    //         },

    //     })
    // }
    // var dados = [{
    //     modelo_de_aeronave: "teste"
    // }];
    // const [aeronaves, setAronave] = useState(dados);
    // const ListarAeronaves = function () {
    //     fetch("/ListarAeronave", {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json;charset=utf-8'
    //         },

    //     }).then((resposta) => resposta.json()).then((data) => {


    //         setAronave(data)
    //     });
    // }
    // useEffect(() => {
    //     ListarAeronaves();
    // }, [])

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
                        {/* <select onChange={OnChangeAeronave} className="medida" name="aircraft-model" id="aircraft-model" defaultValue={'default'}> */}
                        <select disabled className="medida" name="aircraft-model" id="aircraft-model" defaultValue={'default'}>
                            <option value="" disabled></option>
                            {/* {aeronaves.map(function (a) {
                                console.log(a)
                                return <option value={a.modelo_de_aeronave}> {a.modelo_de_aeronave}</option>
                            })}; */}
                        </select>

                    </div>
                    </>
                    <InputCadastros disabled   id="nomeFlap" type="string" placeholder="Flap" setFlap>Flap </InputCadastros>

                </div>



                <div  className="Reversor-details">
                    <input disabled type="radio" name="tipo-usuario" id="dot-1" value="1" />
                    <input type="radio" name="tipo-usuario" id="dot-2" value="2" defaultChecked />
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
                Below


                <div className="condPista">Runway Condition 1</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros id="REF_1" type="number" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros id="weightBelow_1" type="number" placeholder="Bellow">Weight(-)</InputCadastros>
                    <InputCadastros id="weightAbove_1" type="number" placeholder="Above">Weight(+)</InputCadastros>
                    <InputCadastros id="Alt_1" type="number" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros id="tempBelow_1" type="number" placeholder="Bellow">TEMP(ISA-)</InputCadastros>
                    <InputCadastros id="tempAbove_1" type="number" placeholder="Above">TEMP(ISA+)</InputCadastros>
                    <InputCadastros id="headWind_1" type="number" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros id="tailWind_1" type="number" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros id="slopUp_1" type="number" placeholder="UpHill">Slop(-)</InputCadastros>
                    <InputCadastros id="slopDow_1" type="number" placeholder="DownHill">Slop(+) </InputCadastros>
                    <InputCadastros id="vap_1" type="number" placeholder="Vap">VAP</InputCadastros>
                    <InputCadastros id="rev_1" type="number" placeholder="Rev">REV </InputCadastros>


                </div>
                <div className="condPista">Runway Condition 2</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros id="REF_2" type="number" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros id="weightBelow_2" type="number" placeholder="Bellow">Weight(-)</InputCadastros>
                    <InputCadastros id="weightAbove_2" type="number" placeholder="Above">Weight(+)</InputCadastros>
                    <InputCadastros id="Alt_2" type="number" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros id="tempBelow_2" type="number" placeholder="Bellow">TEMP(ISA-)</InputCadastros>
                    <InputCadastros id="tempAbove_2" type="number" placeholder="Above">TEMP(ISA+)</InputCadastros>
                    <InputCadastros id="headWind_2" type="number" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros id="tailWind_2" type="number" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros id="slopUp_2" type="number" placeholder="UpHill">Slop(-)</InputCadastros>
                    <InputCadastros id="slopDow_2" type="number" placeholder="DownHill">Slop(+) </InputCadastros>
                    <InputCadastros id="vap_2" type="number" placeholder="Vap">VAP</InputCadastros>
                    <InputCadastros id="rev_2" type="number" placeholder="Rev">REV </InputCadastros>


                </div>
                <div className="condPista">Runway Condition 3</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros id="REF_3" type="number" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros id="weightBelow_3" type="number" placeholder="Bellow">Weight(-)</InputCadastros>
                    <InputCadastros id="weightAbove_3" type="number" placeholder="Above">Weight(+)</InputCadastros>
                    <InputCadastros id="Alt_3" type="number" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros id="tempBelow_3" type="number" placeholder="Bellow">TEMP(ISA-)</InputCadastros>
                    <InputCadastros id="tempAbove_3" type="number" placeholder="Above">TEMP(ISA+)</InputCadastros>
                    <InputCadastros id="headWind_3" type="number" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros id="tailWind_3" type="number" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros id="slopUp_3" type="number" placeholder="UpHill">Slop(-)</InputCadastros>
                    <InputCadastros id="slopDow_3" type="number" placeholder="DownHill">Slop(+) </InputCadastros>
                    <InputCadastros id="vap_3" type="number" placeholder="Vap">VAP</InputCadastros>
                    <InputCadastros id="rev_3" type="number" placeholder="Rev">REV </InputCadastros>


                </div>
                <div className="condPista">Runway Condition 4</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros id="REF_4" type="number" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros id="weightBelow_4" type="number" placeholder="Bellow">Weight(-)</InputCadastros>
                    <InputCadastros id="weightAbove_4" type="number" placeholder="Above">Weight(+)</InputCadastros>
                    <InputCadastros id="Alt_4" type="number" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros id="tempBelow_4" type="number" placeholder="Bellow">TEMP(ISA-)</InputCadastros>
                    <InputCadastros id="tempAbove_4" type="number" placeholder="Above">TEMP(ISA+)</InputCadastros>
                    <InputCadastros id="headWind_4" type="number" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros id="tailWind_4" type="number" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros id="slopUp_4" type="number" placeholder="UpHill">Slop(-)</InputCadastros>
                    <InputCadastros id="slopDow_4" type="number" placeholder="DownHill">Slop(+) </InputCadastros>
                    <InputCadastros id="vap_4" type="number" placeholder="Vap">VAP</InputCadastros>
                    <InputCadastros id="rev_4" type="number" placeholder="Rev">REV </InputCadastros>


                </div>
                <div className="condPista">Runway Condition 5</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros id="REF_5" type="number" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros id="weightBelow_5" type="number" placeholder="Bellow">Weight(-)</InputCadastros>
                    <InputCadastros id="weightAbove_5" type="number" placeholder="Above">Weight(+)</InputCadastros>
                    <InputCadastros id="Alt_5" type="number" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros id="tempBelow_5" type="number" placeholder="Bellow">TEMP(ISA-)</InputCadastros>
                    <InputCadastros id="tempAbove_5" type="number" placeholder="Above">TEMP(ISA+)</InputCadastros>
                    <InputCadastros id="headWind_5" type="number" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros id="tailWind_5" type="number" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros id="slopUp_5" type="number" placeholder="UpHill">Slop(-)</InputCadastros>
                    <InputCadastros id="slopDow_5" type="number" placeholder="DownHill">Slop(+) </InputCadastros>
                    <InputCadastros id="vap_5" type="number" placeholder="Vap">VAP</InputCadastros>
                    <InputCadastros id="rev_5" type="number" placeholder="Rev">REV </InputCadastros>


                </div>
                <div className="condPista">Runway Condition 6</div>
                <div className="detalhes" id='cadastroFlap'>
                    <InputCadastros id="REF_6" type="number" placeholder="Ref">REF</InputCadastros>
                    <InputCadastros id="weightBelow_6" type="number" placeholder="Bellow">Weight(-)</InputCadastros>
                    <InputCadastros id="weightAbove_6" type="number" placeholder="Above">Weight(+)</InputCadastros>
                    <InputCadastros id="Alt_6" type="number" placeholder="Alt">ALT</InputCadastros>
                    <InputCadastros id="tempBelow_6" type="number" placeholder="Bellow">TEMP(ISA-)</InputCadastros>
                    <InputCadastros id="tempAbove_6" type="number" placeholder="Above">TEMP(ISA+)</InputCadastros>
                    <InputCadastros id="headWind_6" type="number" placeholder="Head">Head Wind</InputCadastros>
                    <InputCadastros id="tailWind_6" type="number" placeholder="Tail">Tail Wind</InputCadastros>
                    <InputCadastros id="slopUp_6" type="number" placeholder="UpHill">Slop(-)</InputCadastros>
                    <InputCadastros id="slopDow_6" type="number" placeholder="DownHill">Slop(+) </InputCadastros>
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
export default CadastrarFlap2;
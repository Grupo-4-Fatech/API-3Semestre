import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from "react";
import Logout from '../../componentes/logout/logout';
import CrudFlap from '../../componentes/Read-Delect-Update-Flap/crudFlap';

const ConsDelFlap = () => {
    
    return (
        <div className="container" >

            <Logout></Logout>

            <a href="./home"><FontAwesomeIcon icon={faArrowLeft} /></a>

            <div className="titulo">Consult</div>

            <form action="#">

                <div className="detalhes">

                    {/* <CrudFlap></CrudFlap> */}

                </div>

            </form>

        </div>
    )
}
export default ConsDelFlap;
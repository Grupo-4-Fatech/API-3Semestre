import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'


const Logout = () => {
    const handleLogOut = function () {
        fetch("/LogOut", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },

        }).then((resposta) => resposta.json()).then((data) => {
            if (data) {
                window.location = '/'
            }

        })
    }


    return (
        <div onClick={handleLogOut} id='btnlogout'><button ><FontAwesomeIcon icon={faRightFromBracket} id="iconlogout" /></button></div>

    );
}

export default Logout;
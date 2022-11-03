import React from 'react';
import { Link } from "react-router-dom";
import "./botaoHome.css"
const BotaoHome = ({ children, home }) => {
    return (
        <div className="btn">
            <Link to={home}><input type="button" value={children} /></Link>
        </div>
    );
}

export default BotaoHome;
import React from "react";
import "./nav.css"
import { Link } from 'react-router-dom'

const Navi=()=>{

    return(
        <div className="navmain">
            
            <div className="logo">akash</div>
        <nav>
            <ul>
                <li><Link to="/home">home</Link></li>
                <li><Link to="/about">about</Link></li> 
                <li><Link to="/services">services</Link></li>
                <li><Link to="/projects">projects</Link></li>
                <li><Link to="/contact">contact</Link></li>
            </ul>
        </nav>
        </div>
        
    )
}
export default Navi
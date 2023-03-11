import React from "react";
import './Style.css';

export default function Navbar() {
    return (
            <nav>
                
                <img className="image" src="https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-s-design_460848-9212.jpg?w=740&t=st=1678517814~exp=1678518414~hmac=1943a820bfa98de0710ca6b11e6297df431c6155d9f02689ddc9c2ca78c6028f"/>
                <a href="#">Sebastain Petravic</a>
                <div className="nav-right">
                    <a href="#">Dribble</a>
                    <a href="#">Linkedin</a>
                    <a href="#">About</a>
                    <a href="#"><button>View Work</button></a>
                </div>
                   
                
                
            </nav>
    );
}












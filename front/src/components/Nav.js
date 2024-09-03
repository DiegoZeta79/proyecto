import React from 'react';

import '../styles/layout/Nav.css';

import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><NavLink to='/' className={({ isActive }) => isActive ? "activo" :
                        undefined}>Home</NavLink></li>
                    <li><NavLink to='/nosotros' className={({ isActive }) => isActive ? "activo" :
                        undefined}>Nosotros</NavLink></li>
                    <li><NavLink to='/leyendas' className={({ isActive }) => isActive ? "activo" :
                        undefined}>Leyendas</NavLink></li>
                    <li><NavLink to='/NovedadesPage' className={({ isActive }) => isActive ? "activo" :
                        undefined}>Cursos</NavLink></li>
                    <li><NavLink to='/contacto' className={({ isActive }) => isActive ? "activo" :
                        undefined}>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );

}

export default Nav;

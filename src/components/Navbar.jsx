import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import styled from "styled-components";


const Nav = styled.nav`
    background-color:  #EA5C3D;
    width: 100%;
`;

const Li = styled.li`
    background-color:  #EA5C3D;
    border: 1px solid red;
    color: #fff;
    padding: 5px;
    margin: 5px;
`;


export default function Navbar() {
   return ( 
   <>
    <Nav className="contenedor-menu">
        <Link className="menu-item" to={"/"}><strong>Home</strong></Link>
        <Link className="menu-item" to={"/login"}><strong>Login</strong></Link>
        <Link className="menu-item" to={"/registro"}><strong>Registro</strong></Link>
    </Nav>
    </>
    )

}

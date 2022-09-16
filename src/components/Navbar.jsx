import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    background-color: aqua;
`;

const Li = styled.li`
    background-color: cadetblue;
    border: 1px solid red;
`;

export default function Navbar() {
   return ( 
   <>
        <Nav>
            <ul>
                <Li><Link to={"/login"}>Login</Link></Li>
                <Li><Link to={"/registro"}>Registro</Link></Li>
                <Li>Inicio</Li>
            </ul>
        </Nav>
    </>
    )

}
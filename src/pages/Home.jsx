import React from "react";
import Title from "../components/header/Title";
import ImgPortada from "../components/img/ImgPortada";
import Navbar from '../components/Navbar'

export default function Home(){
    return (
        <div>
            <Navbar/>
            <ImgPortada src="./portada.svg" />
            <Title>Mis tareas</Title>
        </div>
    )
}
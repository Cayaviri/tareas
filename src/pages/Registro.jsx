import React, { useRef } from "react";
import SubmitButton from "../components/buttons/SubmitButton";
import Container from "../components/container/Container";
import Form from "../components/forms/Form";
import Input from "../components/forms/Input";
import Title from "../components/header/Title";

export default function Registro() {
  const nombre = useRef();
  const direccion = useRef();
  const email = useRef();
  const password = useRef();

  const registro = (e) => {
    e.preventDefault();

  };

  return (
    <>
      <Container>
        <Title>Registro</Title>
        <Form onSubmit={registro}>
          <Input id='Nombre' ref={nombre} placeholder="Nombre" type="text"></Input>
          <Input id='Direccion' ref={direccion} placeholder="Dirección" type="text"></Input>
          <Input id='Email' ref={email} placeholder="Email" type="email"></Input>
          <Input id='Password' ref={password} placeholder="Clave" type="password"></Input>
          <SubmitButton>Registrar</SubmitButton>
        </Form>
      </Container>
    </>
  )

}
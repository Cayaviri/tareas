import React, { useRef } from "react";
import { redirect } from "react-router-dom";
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
  const confirmar = useRef();

  const validaEmail = (email)=> {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
  };

  const registro = (e) => {
    e.preventDefault();
    console.log(password, confirmar)
    if (password.current.value !== confirmar.current.value){
      alert('La contraseña y la confirmación no son iguales')
      return;
    }

    const validoEmail = validaEmail(email.current.value);
    if (!validoEmail)
    {
      alert('No es válido el correo electronico')
      return;
    }

    const validoPasword = validaClave(password.current.value);
    if (!validoPasword)
    {
      alert('La contraseña no cumple con las condiciones mínimas')
      return;
    }

    console.log('el registro es correcto')
    window.location.href = '/';
    
  };

  
  const validaTamClave = (clave) =>{
    return (/(?=.{8,})/.test(clave));
  }

  const validaMinusClave = (clave) =>{
    return (/(?=.*[a-z])/.test(clave));
  }

  const validaMayusClave = (clave) => {
    return (/(?=.*[A-Z])/.test(clave));
  }

  const validaNumClave = (clave) => {
    return (/(?=.*[0-9])/.test(clave));
  }

  const validaEspClave = (clave) => {
    return (/(?=.*[!@#_\-\.\|\$%\^&\*\(\)\=])/.test(clave));
  }

  const validaClave = (clave) => {
    return (validaTamClave(clave) && validaMinusClave(clave) && validaMayusClave(clave) &&
           validaNumClave(clave) && validaEspClave(clave))
  }



  return (
    <>
      <Container>
        <Title>Registro</Title>
        <Form onSubmit={registro}>
          <Input id='Nombre' ref={nombre} placeholder="Nombre" type="text" required></Input>
          <Input id='Direccion' ref={direccion} placeholder="Dirección" type="text" required></Input>
          <Input id='Email' ref={email} placeholder="Email" type="email" required></Input>
          <Input id='Password' ref={password} placeholder="Clave" type="password" required></Input>
          <Input id='Confirmar' ref={confirmar} placeholder="Clave" type="password" required></Input>
          <SubmitButton>Registrar</SubmitButton>
        </Form>
      </Container>
    </>
  )

}
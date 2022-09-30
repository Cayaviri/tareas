import React, { useRef, useContext } from 'react';
import SubmitButton from '../components/buttons/SubmitButton';
import Container from '../components/container/Container';
import Form from '../components/forms/Form';
import Input from '../components/forms/Input';
import Title from '../components/header/Title';
import { authContext } from '../context/AuthContext';

export default function Login(){
    const email = useRef();
    const password = useRef();
    const {setUser} = useContext(authContext);

    const login = (event) => {
        event.preventDefault();
        console.log(email.current.value);
        console.log(password.current.value);
        setUser({
            logged: true,
            data:{
                email: email.current.value,
                password: password.current.value,
            },
        });

        window.location.href = '/tarea'
    };
    return (
        <div className="contenedor-tareas">
            <Container>
                <Title>Login</Title>
                <Form onSubmit={login}>
                    <Input ref={email} placeholder='Email' type='email'></Input>
                    <Input ref={password} placeholder='Password' type='password'></Input>
                    <SubmitButton>Login</SubmitButton>
                </Form>
            </Container>
        </div>
    )
}
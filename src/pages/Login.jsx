import React, { useRef } from 'react';
import SubmitButton from '../components/buttons/SubmitButton';
import Container from '../components/container/Container';
import Form from '../components/forms/Form';
import Input from '../components/forms/Input';
import Title from '../components/header/Title';

export default function Login(){
    const email = useRef();
    const password = useRef();
    const login = (event) => {
        event.preventDefault();
        console.log(email.current.value);
        console.log(password.current.value);
    };
    return (
        <>
            <Container>
                <Title>Login</Title>
                <Form onSubmit={login}>
                    <Input ref={email} placeholder='Email' type='email'></Input>
                    <Input ref={password} placeholder='Password' type='password'></Input>
                    <SubmitButton>Login</SubmitButton>
                </Form>
            </Container>
        </>
    )
}
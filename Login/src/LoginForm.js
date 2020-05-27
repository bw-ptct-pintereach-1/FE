import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components'

const Button = styled.button`
background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 3em;
  font-size: 1.5em;
`
const FormContainer = styled.div`
padding: 80px;
display: flex;
flex-direction: column;
`
const Name = styled.label`
font-size: 2em;
padding: 10px;
font-family: 'Montserrat', sans-serif;
`
const Password = styled.label`
font-size: 2em;
padding: 10px;
font-family: 'Montserrat', sans-serif;`

const H1 = styled.h1`
font-size:3em;
font-family: 'Lobster', cursive;
color: palevioletred;
`


const formSchemaLogin = yup.object().shape({
    name: yup.string().required("Name is required"),
    password: yup.string().required("Password is required")
})

export default function LoginForm() {
    const [formState, setFormState] = useState({
        name: "",
        password: ""
    });

    const [errorState, setErrorState] = useState({
        name: "",
        password: ""
    });

    const validate = e => {
        let value = e.target.value;

        yup.reach(formSchemaLogin, e.target.name)
            .validate(value)
            .then(valid => {
                setErrorState({
                    ...errorState, [e.target.name]: ""

                });
            })
            .catch(err => {
                setErrorState({
                    ...errorState, [e.target.name]: err.errors[0]
                });
            });
    };

    const inputChange = e => {
        e.persist();
        validate(e);
        let value = e.target.value;
        setFormState({
            ...formState, [e.target.name]: value
        });
    }
    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted");
        axios.post("https://reqres.in/api/users", formState)
            .then(response => console.log(response))
            .catch(err => console.log(err));
    };

    return (
        <FormContainer>
            <H1>Pintereach</H1>
            <form onSubmit={formSubmit}>
                <Name>Name
                <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={formState.name}
                        onChange={inputChange}
                    />
                    {errorState.name.length > 0 ? (
                        <p className='error'>{errorState.name}</p>) : null}
                </Name>

                <Password>Password
                <input
                        type="text"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={formState.password}
                        onChange={inputChange}
                    />
                    {errorState.password.length > 0 ? (
                        <p className='error'>{errorState.password}</p>) : null}
                </Password>
                <Button>Login</Button>

            </form>
        </FormContainer>

    )
}
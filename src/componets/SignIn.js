import styled from "styled-components";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import userContext from "../contexts/userContext.js";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disableClick, setDisableClick] = useState("");
    const { setToken } = useContext(userContext);
    const navigate = useNavigate();

    function submit(e) {
        e.preventDefault();
        setDisableClick(true);
        const body = {
            email,
            password,
        };
        const promise = axios.post(`https://sergio-shortly.herokuapp.com/signIn`, body);
        promise.then(response => {
            setToken(response.data);
            navigate("/");
        });
        promise.catch(() => {
            alert("Dados invalidos!");
            setEmail("");
            setPassword("");
            setDisableClick(false);
        });
    }

    return (
        <Container onSubmit={submit}>
            <input 
                    placeholder='Email'
                    type={'text'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={disableClick}
                    required
                />
                <input 
                    placeholder='Senha'
                    type={'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={disableClick}
                    required
                />
                <button type={"submit"} disabled={disableClick} >Entrar</button>
        </Container>
    );
}

const Container = styled.form`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 1.36vh;
    line-height: 1.66vh;
    margin-top: 31.7vh;

    input {
            width: 53.4vw;
            height: 5.8vh;
            padding-left: 1.4vw;
            margin-bottom: 2.44vh;
            border-radius: 5px;
            box-shadow: 0px 4px 24px 0px #78B1591F;
            border: 1px solid #78B15940;

            ::placeholder {
                color: var(--gray);
            }
        }

        button {
            width: 12.6vw;
            height: 5.85vh;
            border-radius: 12px;
            background-color: var(--green);
            color: var(--white);
            font-weight: bold;
            border: none;
            margin-top: 3.5vh;
        }
`
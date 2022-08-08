import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [disableClick, setDisableClick] = useState(false);
    const navigate = useNavigate();
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,16}$/;

    function submit(e) {
        e.preventDefault();
        setDisableClick(true);
        if (!passwordPattern.test(password)) {
            alert("A senha deve ter entre 8 e 16 caracteres, dentre eles deve pelo menos uma letra maiuscula, um letra minuscula, um caracter especial (@#$%&) e um número.");
            setDisableClick(false);
            setPassword("");
            setConfirmPassword("");
        }
        if (password !== confirmPassword) {
            alert("As senhas devem coincidir!");
            setDisableClick(false);
            setConfirmPassword("");
            setPassword("");
            return;
        }
        const body = {
            name,
            email,
            password,
            confirmPassword,
        }
        const promise = axios.post(`https://sergio-shortly.herokuapp.com/signUp`, body);
        promise.then(() => {
            alert("Cadastro realizado com sucesso. Faça login!");
            navigate("/signIn");
        });
        promise.catch(err => {
            if (err.response.status === 409) {
                alert("Este email já está em uso. Digite um email válido!");
                setEmail("");
            }
            setDisableClick(false);
        });
    }
    return (
        <Container>
            <form onSubmit={submit}>
                <input 
                    placeholder='Nome'
                    type={'text'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={disableClick}
                    required
                />
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
                <input 
                    placeholder='Confirmar Senha'
                    type={'password'}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={disableClick}
                    required
                />
                <button type={"submit"} disabled={disableClick} >Criar Conta</button>
            </form>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    margin-top: 31.7vh;
    font-family: 'Lexend Deca', sans-serif;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.36vh;
        line-height: 1.66vh;

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
    }
`
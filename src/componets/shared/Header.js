import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Logo from "../../assets/Logo.png";
import userContext from "../../contexts/userContext";
import { welcomeUser, navBar } from "./headerComponents";

export default function Header() {
    const { token, setToken } = useContext(userContext);

    const renderWelcomeUser = welcomeUser(token, setToken);
    const renderNavBar = navBar(token, setToken);
    const pColor = token ? "#9C9C9C" : "#5D9040";

    return (
        <Container pCor={pColor}>
            <div>
                {renderWelcomeUser}
                {renderNavBar}
            </div> 
            <Link to="/">
                <img src={Logo} alt="logo" />
            </Link>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 19.2vh;
    padding: 5.8vh 11.8vw 0 14.7vw;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lexend Deca', sans-serif;

    img {
        height: 9.9vh;
        width: 21.8vw;
    }

    a {
        text-decoration: none;
        color: var(--gray);
    }

    > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 1.36vh;
        line-height: 1.7vh;

        div {
            display: flex;
            justify-content: space-between;
            justify-self: flex-end;
            margin-bottom: 2.7vh;

            a {
                margin-left: 1.7vw;
            }
        }

        span {
            color: var(--green);
        }

        p {
            color: ${props => props.pCor}
        }
    }
`
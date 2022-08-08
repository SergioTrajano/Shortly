import { useContext } from "react";
import styled from "styled-components";

import userContext from "../../contexts/userContext";
import Ranking from "../Ranking.js";
import LoggedHome from "./LoggedHome.js";

export default function Home() {
    const { token } = useContext(userContext);
    const render = token ? <LoggedHome /> : <Ranking />;
    const footer = token ? <></> : <h1>Crie sua conta para usar nosso serviço!</h1>;

    return (
        <Container>
            {render}
            {footer}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lexend Deca', sans-serif;

    h1 {
        font-weight: bold;
        font-size: 3.5vh;
        line-height: 4.3vh;
        color: var(--black);
        margin-top: 12vh;
    }
`
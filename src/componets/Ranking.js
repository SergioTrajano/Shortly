import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

import Troph from "../assets/Troph.png";
import Score from "./Score.js";

export default function Ranking() {
    const [ranking, setRanking] = useState([]);
    
    useEffect(() => {
        const promise = axios.get("https://sergio-shortly.herokuapp.com/ranking");
        promise.then(response => {
            console.log(response.data)
            setRanking(response.data.slice(0, 5));
        });
    }, []);

    return (
        <Container>
            <div>
                <img src={Troph} alt="vector" />
                Ranking
            </div>
            <ol>
                {ranking.map((item, i) => <Score key={i} userData={item}/>)}
            </ol>
        </Container>
    );
}

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25vh;
    font-family: 'Lexend Deca', sans-serif;

    > div:first-child {
        width: 15.2vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--black);
        font-weight: bold;
        font-size: 3.5vh;
        line-height: 4.3vh;
    }

    ol {
        width: 70.6vw;
        height: 23.5vh;
        border: 1px solid #78B15940;
        box-shadow: 0px 4px 24px 0px #78B1591F;
        border-top-left-radius: 24px;
        border-top-right-radius: 24px;
        margin-top: 5.6vh;
        padding: 1.8vh 8.8vw 2.9vh 2.7vw;
        line-height: 2.68vh;
        font-size: 2.14vh;
        color: var(--black);
        font-weight: 500;
    }
`
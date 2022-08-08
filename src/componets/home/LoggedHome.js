import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import userContext from "../../contexts/userContext.js";
import UrlComponent from "./urlData.js";

export default function LoggedHome() {
    const { token } = useContext(userContext);
    const [url, setUrl] = useState("");
    const [disableClick, setDisableClick] = useState(false);
    const [userUrls, setUsersUrls] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        }
        const promise = axios.get("https://sergio-shortly.herokuapp.com/users/me", config);
        promise.then(response => {
            setUsersUrls(response.data.shortenedUrls);
        });
    }, [token, userUrls]);

    function submit(e) {
        e.preventDefault();
        const config = {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        };
        setDisableClick(true);
        const promise = axios.post("https://sergio-shortly.herokuapp.com/urls/shorten", { url }, config);
        promise.then(response => {
            alert(`URL encurtada para ${response.data.shortenUrl}!`);
            setUrl("");
        });
        setDisableClick(false);
    }

    return (
        <Container>
            <form onSubmit={submit}>
                <input 
                    placeholder='Links que cabem no bolso'
                    type={'text'}
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    disabled={disableClick}
                    required
                />
                <button type="submit">
                    Encurtar link
                </button>
            </form>
            <ol>
                {userUrls.map((url, i) => <UrlComponent key={i} urlData={url} />)}
            </ol>
        </Container>
    );
}

const Container = styled.div`
    margin-top: 32.5vh;
    font-family: 'Lexend Deca', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.36vh;
    line-height: 1.7vh;

    form {
        display: flex;
        justify-content: space-between;

        input {
            color: var(--black);
            width: 53.4vw;
            height: 5.85vh;
            padding-left: 1.45vw;
            border-radius: 12px;
            margin-right: 4.79vw;
            border: 1px solid #78B15940;

            ::placeholder {
                color: var(--gray);
            }
        }

        button {
            width: 12.6vw;
            height: 5.85vh;
            background-color: var(--green);
            border-radius: 12px;
            font-weight: bold;
            color: var(--white);
            border: 1px solid #78B15940;
        }
    }

    ol {
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 44vh;
        left: 0;

        li {
            display: flex;
            margin-bottom: 4.1vh;

            > div:first-child {
                width: 61.59vw;
                min-height: 5.85vh;
                background-color: var(--lightgreen);
                color: var(--white);
                border-top-left-radius: 12px;
                border-bottom-left-radius: 12px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                border: 1px solid #78B15940;

                span:first-child {
                    max-width: 13.8vw;
                }
            }

            >div:last-child {
                width:  9.02vw;
                min-height: 5.85vh;
                background-color: var(--white);
                display: flex;
                justify-content: center;
                align-items: center;
                border-top-right-radius: 12px;
                border-bottom-right-radius: 12px;
                border: 1px solid #78B15940;

                img {
                    width: 1.52vw;
                    height: 2.5vh;
                }
            }
        }
    }
`
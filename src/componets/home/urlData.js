import axios from "axios";
import { useContext } from "react";

import TrashCan from "../../assets/TrashCan.png";
import userContext from "../../contexts/userContext.js";

export default function UrlData({ urlData }) {
    const { token } = useContext(userContext);

    function deleteUrl() {
        const config = {
            headers: {
                Authorization: `Bearer ${token.token}`
            }
        };
        const promise = axios.delete(`https://sergio-shortly.herokuapp.com/urls/${urlData.id}`, config);
        promise.then(() => {
            alert("Url deletada com sucesso!");
        });
    }

    return (
        <li>
            <div>
                <span>{urlData.url}</span>
                <span>{urlData.shortUrl}</span>
                <span>Quantidade de visitantes: {urlData.visitCount}</span>
            </div>
            <div>
                <img onClick={deleteUrl} src={TrashCan} alt="vector" />
            </div>
        </li>
    );
}
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import userContext from "../contexts/userContext.js";
import Home from "./home/Home.js";
import Header from "./shared/Header.js";
import SignIn from "./SignIn.js";
import SignUp from "./SignUp.js";
import Ranking from "./Ranking.js";

export default function App() {
    const [token, setToken] = useState("");

    return (
        <userContext.Provider value={{token, setToken}}>
            <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/ranking" element={<Ranking />} />
            </Routes>
            </BrowserRouter>
        </userContext.Provider>
    );
}
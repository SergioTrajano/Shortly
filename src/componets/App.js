import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import userContext from "../contexts/userContext.js";
import Home from "./home/Home.js";
import Footer from "./shared/Footer.js";
import Header from "./shared/Header.js";

export default function App() {
    const [token, setToken] = useState();

    return (
        <userContext.Provider value={{token, setToken}}>
            <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
            </BrowserRouter>
        </userContext.Provider>
    )
}
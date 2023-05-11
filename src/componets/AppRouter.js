import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Adresa from "./Adresa";
import About from "./About";
const Kontakt = () =>{
    return(
        <div>
             <h2>Kontakt</h2>
            <p>Zagreb - Ilica 242, Maksimirska 58a</p>
            <p>Telefon</p>
        </div>
    )
} 


export default function AppRouter(){
    return (
        <BrowserRouter>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/adresa/">Adresa</Link>
                    </li>
                    <li>
                        <Link to="/kontakt/">Kontakt</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/adresa/" exact element={<Adresa/>} />
                <Route path="/kontakt/" exact element={<Kontakt/>} />
                <Route path="/about/" exact element={<About/>} />
            </Routes>
        </div>
        </BrowserRouter>
    );
}
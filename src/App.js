
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import LoginPage from "./LoginPage";
import Home from "./Home";

export default class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="about" element={<About/>}></Route>
                    <Route path="login" element={<LoginPage/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        )
    }
}
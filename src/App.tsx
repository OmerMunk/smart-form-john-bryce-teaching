/**
 * Components IMports
 */

import React, {useState} from 'react';
import './styles/styles.css'
import Box from "./components/Box/Box";
import Button from "./components/Button/Button";

import {Routes, Route} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Kanye from "./pages/Kanye/Kanye";

function App() {

    return (
        <>
            <Navigation/>
            <Routes>
                <Route path={'/home'} element={<Home/>}/>
                <Route path={'/about-us'} element={<AboutUs/>}/>
                <Route path={'/contact-us'} element={<ContactUs/>}/>
                <Route path={'/kanye'} element={<Kanye/>}/>
            </Routes>
        </>
    );
}

export default App;

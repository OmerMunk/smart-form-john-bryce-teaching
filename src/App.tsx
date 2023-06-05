import React, {useState} from 'react';
import './styles/styles.css'
import Box from "./components/Box/Box";
import Button from "./components/Button/Button";

import {Routes, Route} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";

function App() {

    return (
        <>
            <Navigation/>
            <Routes>
                <Route path={'/home'} element={<h1>This is home</h1>}/>
                <Route path={'/about'} element={<h1>This is about</h1>}/>
            </Routes>
        </>
    );
}

export default App;

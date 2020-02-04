import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import CryptoCurrent from './components/CryptoCurrent';

ReactDOM.render(
    <>
        <Router>
            <CryptoCurrent />
        </Router>
    </>
    , document.getElementById('root'));
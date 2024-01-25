import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Error from './pages/Error';
import Logements from './pages/Logements';
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
                <Header />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/logements/:id' element={<Logements />} />
                        <Route path='/Apropos' element={<Apropos />} />
                        <Route path='*' element={<Error />} />
                    </Routes>
                <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
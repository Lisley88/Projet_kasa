import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Error from './pages/Error';
import Logements from './pages/Logements';
import Header from './components/Header';
import Footer from './components/Footer';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
                <Header />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/logement/:id' element={<Logements />} />
                        <Route path='/apropos' element={<Apropos />} />
                        <Route path='/*' element={<Error />} />
                    </Routes>
                <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
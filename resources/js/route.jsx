import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Page from './Pages/Page';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/'  element={<Home />} />
                <Route path='/page'  element={<Page />} />
            </Routes>
        </BrowserRouter>
    );
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);

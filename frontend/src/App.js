import React from "react";
import {Route, Routes} from 'react-router-dom'
import './styles/app.css';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
    return (
        <div className="App">
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route path="/search" element={<Search />} />
                    <Route path="/browse" element={<Browse />} /> */}
                </Routes>
            </main>
            
        </div>
    )
}

export default App;
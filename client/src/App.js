import React from "react";
import {Route, Routes} from 'react-router-dom'
import './styles/app.css';
import Home from './pages/Home';
import About from './pages/About';
import Browse from "./pages/Browse";
import ViewDetails from "./pages/ViewDetails";


const App = () => {
    return (
        <div className="App">
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/browse" element={<Browse />} />
                    <Route path="/browse/hairStyle/:id" element={<ViewDetails />}/>
                </Routes>
            </main>
            
        </div>
    )
}

export default App;
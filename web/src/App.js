import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Home';
import Contact from "./Components/Contact"
import About from './Components/About';
import LogIn from "./Components/LogIn/LogIn";
import SignUp from './Components/SignUp/SignUp';
import {Route, Routes} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<LogIn/>}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
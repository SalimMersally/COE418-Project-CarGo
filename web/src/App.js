import React from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Home';
import ContactUs from "./Components/ContactUs/ContactUs"
import About from './Components/About';
import LogIn from "./Components/LogIn/LogIn";
import SignUp from './Components/SignUp/SignUp';
import {Route, Routes} from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Footer from "./Components/Footer/Footer";
import Error from "./Components/Error/Error";
import Book from "./Components/Book/Book";
import LogOut from "./Components/LogOut/LogOut";
import Car from "./Components/Car/Car";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<ContactUs/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/logOut" element={<LogOut/>}/>
                <Route path="/book-a-car" element={<Book/>}/>
                <Route path="/car/:carId" element={<Car/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
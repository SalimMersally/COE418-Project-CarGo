import React from 'react';
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import Contact from "./Components/Contact"
import About from './Components/About';
import LogIn from "./Components/LogIn";
import SignIn from './Components/SignIn';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';

function App() {

	return (
		<React.Fragment>
			<Navbar/>
			<div className='container'>
				<Routes>
					<Route path = "/home" element = {<Home / >}/>
					<Route path = "/dashboard" element = {<Dashboard / >}/>
					<Route path = "/about" element = {<About/ >}/>
					<Route path = "/contact" element = {<Contact / >}/>
					<Route path = "/signin" element = {<SignIn / >}/>
					<Route path = "/login" element = {<LogIn / >}/>
				</Routes>
			</div>
		</React.Fragment>
	);
}

export default App;
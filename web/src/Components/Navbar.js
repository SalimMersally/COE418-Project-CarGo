import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";


function Navbar() {

	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<h3 font= "Racing Sans One">LOGO</h3>
			<nav ref={navRef}>
				<a href="/home">Home</a>
				<a href="/contact">Contact us</a>
				<a href="/dashboard">Dashboard</a>
				<a href="/about">About us</a>
				<a href ="/signin">Log in</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
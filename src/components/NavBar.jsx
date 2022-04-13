import { NavLink } from "react-router-dom"
import "./NavBar.css"


const NavBar = () => {

	return (
		<nav>
			<NavLink to="/"> Start </NavLink>
			<NavLink to="/browsepokemon"> Browse Pokemon </NavLink>
			<NavLink to="/teambuilder"> Team Builder </NavLink>
		</nav>
	)
}

export default NavBar
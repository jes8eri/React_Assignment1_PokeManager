import { NavLink } from "react-router-dom"


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
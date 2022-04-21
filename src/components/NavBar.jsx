import { NavLink } from "react-router-dom"
import PokeCircle from "../assets/images/poke-circle.png"
import PikaCircle from "../assets/images/pika-circle.png"
import PokedexCircle from "../assets/images/pokedex-circle.png"
import "./NavBar.css"

const NavBar = () => {

	return (
		<>
			<nav >
				<NavLink to="/"> <img src={PokeCircle} alt="" /> Home </NavLink>
				<NavLink to="/browsepokemon"> <img src={PokedexCircle} alt="" /> Pokédex </NavLink>
				<NavLink to="/teambuilder"> <img src={PikaCircle} alt="" /> Team Viewer </NavLink>
			</nav>
		</>

	)
}

export default NavBar
import { useState } from "react";
import PokeModal from "./PokeModal";
import "./PokemonSearchCard.css"

const PokemonSearchCard = ({ pokemon, openPokeModal }) => {



	const handleOnClick = (e) => {
		console.log("clicked");

		openPokeModal(true);
	}

	return (
		<>
			<div className="pokemon-search-card" onClick={(e) => handleOnClick(e)}>
				<img src={pokemon.sprites.front_default} alt="" />
				<p>#{pokemon.id} {pokemon.name}</p>

			</div>

		</>
	)
}

export default PokemonSearchCard
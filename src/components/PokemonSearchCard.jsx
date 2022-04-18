import { useState } from "react";
import PokeModal from "./PokeModal";
import "./PokemonSearchCard.css"

const PokemonSearchCard = ({ pokemon, openPokeModal, selectedPokemon }) => {



	const handleOnClick = () => {
		console.log("clicked");

		openPokeModal(true);
		selectedPokemon(pokemon)
	}

	return (
		<>
			<div className="pokemon-search-card" onClick={() => handleOnClick()}>
				<img src={pokemon.sprites.front_default} alt="" />
				<p>#{pokemon.id} {pokemon.name}</p>

			</div>

		</>
	)
}

export default PokemonSearchCard
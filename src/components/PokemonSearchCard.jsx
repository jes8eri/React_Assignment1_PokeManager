import { useState } from "react";
import PokeModal from "./PokeModal";
import "./PokemonSearchCard.css"

const PokemonSearchCard = ({ pokemon, openPokeModal, selectedPokemon, pokemonId }) => {

	// sprite url to allow it to show up before the rest of the api-data has been fetched, alongside name
	const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;


	const handleOnClick = () => {
		console.log("clicked");

		openPokeModal(true);
		selectedPokemon(pokemon)
	}

	return (
		<>
			<div className="pokemon-search-card" onClick={() => handleOnClick()}>
				<img src={spriteUrl} alt="" />
				<p>#{pokemonId} {pokemon.name}</p>

			</div>

		</>
	)
}

export default PokemonSearchCard
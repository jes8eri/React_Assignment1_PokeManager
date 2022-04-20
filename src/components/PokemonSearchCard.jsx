import { useState } from "react";
import PokeModal from "./PokeModal";
import "./PokemonSearchCard.css"

const PokemonSearchCard = ({ pokemon, openPokeModal, selectedPokemon, pokemonId }) => {

	// sprite url to allow it to show up before the rest of the api-data has been fetched, alongside name
	const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
	const pokemonName = pokemon.name.substring(0, 1).toUpperCase() + pokemon.name.substring(1);

	const handleOnClick = () => {

		openPokeModal(true);
		selectedPokemon(pokemon)
		console.log(spriteUrl);
	}

	// TODO: Change class name / contents depending on if its viewed in teamView or browsePokemonView, to change appearance
	return (
		<>
			<div className="pokemon-search-card" onClick={() => handleOnClick()}>
				<img src={spriteUrl} alt={pokemon.name} />
				<div className="pokemon-search-card__textbox">
					<p>{pokemonId}</p>
					<p>{pokemonName}</p>
				</div>


			</div>

		</>
	)
}

export default PokemonSearchCard
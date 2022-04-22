import { useState } from "react";
import PokeModal from "./PokeModal";
import ReactImageFallback from "react-image-fallback";
import PokeFallbackImg from "../assets/images/PokeFallbackImg.png";
import "./PokemonSearchCard.css"

const PokemonSearchCard = ({ pokemon, openPokeModal, selectedPokemon, pokemonId }) => {

	// Get sprite image from url to allow it to show up before the rest of the api-data has been fetched, alongside name. Some pokemon variants use a different ID than normal which results in the image not getting fetched. (For example: Deoxys-attack variant has an ID of 899, but gets its image from ID 10001.)
	const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
	const pokemonName = pokemon.name.substring(0, 1).toUpperCase() + pokemon.name.substring(1);

	//TODO: If image can't be loaded, make separate API request to get it from the data.url? Pros/Cons: Looks better / More API requests.

	const handleOnClick = () => {
		openPokeModal(true);
		selectedPokemon(pokemon)
	}

	return (
		<>
			<div className="pokemon-search-card" onClick={() => handleOnClick()}>

				<ReactImageFallback
					src={spriteUrl}
					fallbackImage={PokeFallbackImg}
					alt={pokemon.name} />
				<div className="pokemon-search-card__textbox">
					<p>No.{pokemonId}</p>
					<p>{pokemonName}</p>
				</div>

			</div>

		</>
	)
}

export default PokemonSearchCard
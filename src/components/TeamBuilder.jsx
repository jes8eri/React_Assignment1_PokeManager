import { useState, useEffect } from "react";
import PokemonSearchCard from "./PokemonSearchCard";
import PokeModal from "./PokeModal";
import "./BrowsePokemon.css"

const TeamBuilder = ({ pokemonTeam, setPokemonTeam, modalTeamView }) => {
	const [openPokeModal, setOpenPokeModal] = useState(false);
	const [modalSelectedPokemon, setModalSelectedPokemon] = useState("");


	const displayPokemonTeam = pokemonTeam.map((pokemon) => (
		<li key={pokemon.id}>
			<PokemonSearchCard pokemon={pokemon} pokemonId={pokemon.id} openPokeModal={setOpenPokeModal} selectedPokemon={setModalSelectedPokemon} />
		</li>
	));

	// TODO: remove classname?
	return (
		<>
			<div className="browse-pokemon-container">
				{openPokeModal ? <PokeModal closePokeModal={setOpenPokeModal} selectedPokemon={modalSelectedPokemon} pokemonTeam={pokemonTeam} setPokemonTeam={setPokemonTeam} isTeamView={true} /> : null}

				<section className="pokemon-results">

					<div className="pokemon-results__grid">
						{displayPokemonTeam}
					</div>
				</section>
			</div>
		</>
	)
}

export default TeamBuilder
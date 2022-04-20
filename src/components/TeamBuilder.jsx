import { useState, useEffect } from "react";
import PokemonSearchCard from "./PokemonSearchCard";
import PokeModal from "./PokeModal";
import "./TeamBuilder.css"

const TeamBuilder = ({ pokemonTeam, setPokemonTeam, modalTeamView }) => {
	const [openPokeModal, setOpenPokeModal] = useState(false);
	const [modalSelectedPokemon, setModalSelectedPokemon] = useState("");


	const displayPokemonTeam = pokemonTeam.map((pokemon) => (
		<li key={pokemon.id}>
			<PokemonSearchCard pokemon={pokemon} pokemonId={pokemon.id} openPokeModal={setOpenPokeModal} selectedPokemon={setModalSelectedPokemon} />
		</li>
	));

	// TODO: Change look / own css
	// Show "empty" pokemon cards
	// In own css file => only two columns
	// "Here you can view your team, lalala, press a pokemon to view more details. Press Button next to name to edit the name"

	//oldname state
	//name has been changed state
	return (
		<>


			<div className="pokemon-team-container">
				<div><p> <br />[Box with team info up here]</p></div>
				{openPokeModal ? <PokeModal closePokeModal={setOpenPokeModal} selectedPokemon={modalSelectedPokemon}
					pokemonTeam={pokemonTeam} setPokemonTeam={setPokemonTeam}
					isTeamView={true} /> : null}

				<section className="pokemon-team-results">
					<div>
						<div className="pokemon-team-results__grid">
							{displayPokemonTeam}
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export default TeamBuilder
import { useState, useEffect } from "react";
import PokemonSearchCard from "./PokemonSearchCard";
import PokeModal from "./PokeModal";
import "./TeamBuilder.css"

const TeamBuilder = ({ pokemonTeam, setPokemonTeam, modalTeamView, isTeamView }) => {
	const [openPokeModal, setOpenPokeModal] = useState(false);
	const [modalSelectedPokemon, setModalSelectedPokemon] = useState("");

	const displayPokemonTeam = pokemonTeam.map((pokemon, index) => (
		<li key={index}>
			<PokemonSearchCard isTeamView={isTeamView} pokemon={pokemon} pokemonId={pokemon.id} openPokeModal={setOpenPokeModal} selectedPokemon={setModalSelectedPokemon} />
		</li>
	));


	const clearTeam = () => {

		setPokemonTeam([])
	}

	return (
		<>

			<div className="pokemon-team-container">
				<div className="pokemon-team-infoblurb">
					<p>[Box with team info up here]</p>
				</div>
				{openPokeModal ? <PokeModal closePokeModal={setOpenPokeModal} selectedPokemon={modalSelectedPokemon}
					pokemonTeam={pokemonTeam} setPokemonTeam={setPokemonTeam} isTeamView={isTeamView}
				/> : null}

				<section className="pokemon-team-results">
					{!pokemonTeam.length > 0 ?
						<div>
							<p>Empty pokemon team yo, Prof Oak quote about pokemon stuff </p>
						</div> : null}
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
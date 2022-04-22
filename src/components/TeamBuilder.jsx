import { useState } from "react";
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

	// function getTypes() {
	// 	if (pokemonTeam.length > 0) {
	// 		pokemonTeam.map(pokemon => {
	// 			pokemon.data.types.map(types => {
	// 				console.log(types.type);
	// 				console.log(types.type.name);
	// 			})

	// 		})
	// 	}
	// }


	return (
		<>

			<div className="pokemon-team-container">
				<section className="team-view-info-section">
					<div className="teamview-info-bottom">
						{!pokemonTeam.length > 0 ?
							<p> Go ahead and add some Pokémon from the Pokédex! </p> :
							<>
								<p>Team Count: {pokemonTeam.length} / 27</p>
							</>
						}

					</div>
				</section>
				{openPokeModal ? <PokeModal closePokeModal={setOpenPokeModal} selectedPokemon={modalSelectedPokemon}
					pokemonTeam={pokemonTeam} setPokemonTeam={setPokemonTeam} isTeamView={isTeamView}
				/> : null}

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
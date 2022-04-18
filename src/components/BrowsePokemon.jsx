import { useState, useEffect } from "react";
import PokemonSearchCard from "./PokemonSearchCard";
import PokeModal from "./PokeModal";
import "./BrowsePokemon.css"


const BrowsePokemon = ({ pokemonList, setPokemonList, pokemonTeam, setPokemonTeam }) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [openPokeModal, setOpenPokeModal] = useState(false);
	const [modalSelectedPokemon, setModalSelectedPokemon] = useState("")


	return (
		<>
			<div className="container">
				{openPokeModal ? <PokeModal closePokeModal={setOpenPokeModal} selectedPokemon={modalSelectedPokemon} /> : null}
				<section className="pokemon-search">
					<div className="input-container">
						<input type="text" placeholder="Search for a Pokemon" />
						<label className="pokemon-search__icon">S</label>
					</div>

				</section>

				<section className="pokemon-results">
					<div className="grid-container">
						<div className="pokemon-results__grid">

							{pokemonList.map((pokemon) => (
								<div className="TESTPOKEMON" key={pokemon.id}>
									<PokemonSearchCard pokemon={pokemon} openPokeModal={setOpenPokeModal} selectedPokemon={setModalSelectedPokemon} />
								</div>
							))}

						</div>
					</div>
					<div className="pokemon-results__buttons">
						<button> &lt; Previous </button>
						<button>Next &gt;</button>
					</div>
				</section>
			</div>
		</>
	)
}

export default BrowsePokemon
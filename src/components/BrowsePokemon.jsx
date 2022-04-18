import { useState, useEffect } from "react";
import PokemonSearchCard from "./PokemonSearchCard";
import "./BrowsePokemon.css"


const BrowsePokemon = ({ pokemonList, setPokemonList, pokemonTeam, setPokemonTeam }) => {

	const [currentPage, setCurrentPage] = useState(1)

	return (

		<div className="container">

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
								<PokemonSearchCard pokemon={pokemon} />
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
	)
}

export default BrowsePokemon
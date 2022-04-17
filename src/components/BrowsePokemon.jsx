import { useState, useEffect } from "react";
import PokemonSearchCard from "./PokemonSearchCard";
import "./BrowsePokemon.css"


const BrowsePokemon = ({ pokemonList, setPokemonList, pokemonTeam, setPokemonTeam }) => {



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

						{pokemonList.map(pokemon => (
							<div className="TESTPOKEMON" key={pokemon.id}>
								<PokemonSearchCard name={pokemon.name} id={pokemon.id} picture={pokemon.picture} />
							</div>
						))}

					</div>
				</div>
				<div className="pokemon-results__buttons">
					<button> &lt; Previous 25</button>
					<button>Next 25 &gt;</button>
				</div>
			</section>

		</div>
	)
}

export default BrowsePokemon
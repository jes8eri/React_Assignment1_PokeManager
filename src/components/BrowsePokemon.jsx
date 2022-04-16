
import "./BrowsePokemon.css"


const BrowsePokemon = () => {

	const testPokemon = [
		{ name: "bulbasaur", id: 1, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 2, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 3, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 4, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 5, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 6, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 7, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 8, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 8, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 8, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 8, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 5, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 6, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 7, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 8, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 8, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 8, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 8, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 5, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 6, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 7, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 8, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 8, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 8, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 8, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 5, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 6, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 7, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 8, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 8, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 8, picture: "[PICTURE]" },
		{ name: "bulbasaur", id: 8, picture: "[PICTURE]" },
	]

	return (

		<div className="container">

			<section className="pokemon-search">
				<div className="input-container">
					<input type="text" placeholder="Search for a Pokemon" />
					<label className="pokemon-search__icon">S</label>
				</div>

			</section>

			<section className="pokemon-results">
				<div className="test-grid-container">
					<div className="test-grid">

						{testPokemon.map(pokemon => (
							<div className="TESTPOKEMON" key={pokemon.id}>
								{pokemon.picture} {pokemon.name} {pokemon.id}
							</div>
						))}

					</div>
				</div>
			</section>

		</div>
	)
}

export default BrowsePokemon
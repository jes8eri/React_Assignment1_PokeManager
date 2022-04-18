import "./PokemonSearchCard.css"

const PokemonSearchCard = ({ pokemon }) => {

	return (
		<div className="pokemon-search-card">
			<img src={pokemon.sprites.front_default} alt="" />
			<p>#{pokemon.id} {pokemon.name}</p>

		</div>
	)
}

export default PokemonSearchCard
import "./PokemonSearchCard.css"

const PokemonSearchCard = (props) => {

	return (
		<div className="pokemon-search-card">
			<p>#{props.id} {props.picture} {props.name}</p>

		</div>
	)
}

export default PokemonSearchCard
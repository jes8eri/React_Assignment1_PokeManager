import "./PokemonSearchCard.css"

const PokemonSearchCard = (props) => {

	return (
		<div className="pokemon-search-card">
			<img src={props.picture} alt="" />
			<p>#{props.id} {props.name}</p>

		</div>
	)
}

export default PokemonSearchCard
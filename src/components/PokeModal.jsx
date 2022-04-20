import { useState, useEffect } from "react";
import "./PokeModal.css"


const PokeModal = ({ closePokeModal, selectedPokemon, pokemonTeam, setPokemonTeam, isTeamView }) => {
	const [pokemonData, setPokemonData] = useState({})
	const [isLoading, setIsLoading] = useState(true)

	//Get data from API unless the modal is opened from teamView, then get the data from the sent in pokemon since it has already been fetched previously
	const getPokemonData = async () => {
		if (!isTeamView) {
			const response = await fetch(selectedPokemon.url)
			const data = await response.json();
			setPokemonData(data);
			setIsLoading(false)
		}
		else {
			setPokemonData(selectedPokemon.data)
			setIsLoading(false)
		}
		// console.log(pokemonData);
	}

	useEffect(() => {
		getPokemonData();
	}, [])

	const addPokemonToTeam = () => {
		setPokemonTeam([...pokemonTeam,
		{ name: pokemonData.name, id: pokemonData.id, data: pokemonData }])
	}


	return (

		<dialog className="poke-container-background" onClick={(e) => { e.stopPropagation(), closePokeModal(false) }}>
			<div className="poke-modal" onClick={(e) => { e.stopPropagation() }}>
				{isLoading ? <p>Loading..</p> : <>

					<div className="poke-modal__header">

						<img className="poke-modal__sprite" src={pokemonData.sprites.other.dream_world.front_default} alt="" />
						<div className="poke-modal__namebox">
							<h2>{pokemonData.name.substring(0, 1).toUpperCase() + pokemonData.name.substring(1)}</h2>
							<button className="poke-modal__namebox__rename-button">O</button>
						</div>

						<p>{pokemonData.stats[0].base_stat} / {pokemonData.stats[0].base_stat} HP </p>
					</div>
					<div className="poke-modal__body">

						<div className="poke-modal__infobox">
							<p><span>{pokemonData.weight} </span>Weight</p>
							<div className="poke-modal__infobox__types">
								{pokemonData.types.map((type, index) => (<p key={index}>{type.type.name.toUpperCase()}</p>))}
							</div>
							<p>Type</p>
							<p><span>{pokemonData.height}</span> Height</p>
						</div>

						<div className="poke-modal-abilities">
							<h3>Abilities</h3>
							<div className="poke-modal-abilities__info">
								{pokemonData.abilities.map((ability, index) => (<p key={index}>{ability.ability.name.toUpperCase()}</p>))}
							</div>
						</div>

					</div>
					<div className="poke-modal__footer">
						{isTeamView ? <button className="poke-modal__addremove-button" > Remove from team </button> :
							<button className="poke-modal__addremove-button" onClick={addPokemonToTeam}> Add to team </button>}
					</div>

				</>}
			</div>

		</dialog>
	)
}

export default PokeModal
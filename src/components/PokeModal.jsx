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
						<h1>Test modal</h1>
						<img src={pokemonData.sprites.other.dream_world.front_default} alt="" />
					</div>
					<div className="poke-modal__body">
						<p>Test test test test</p>
						<p> {pokemonData.name}</p>
						{isTeamView ? <button> Remove from team </button> :
							<button onClick={addPokemonToTeam}> Add to team </button>}
					</div> </>}
			</div>

		</dialog>
	)
}

export default PokeModal
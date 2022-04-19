import { useState, useEffect } from "react";
import "./PokeModal.css"


const PokeModal = ({ closePokeModal, selectedPokemon }) => {
	const [pokemonData, setPokemonData] = useState({})
	const [isLoading, setIsLoading] = useState(true)

	const getPokemonData = async () => {
		const response = await fetch(selectedPokemon.url)
		const data = await response.json();
		console.log(data);
		setPokemonData(data);
		setIsLoading(false)
		// console.log(pokemonData);
	}

	useEffect(() => {
		getPokemonData();
	}, [])

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

					</div> </>}
			</div>

		</dialog>
	)
}

export default PokeModal
import { useState, useEffect } from "react";
import ReactImageFallback from "react-image-fallback";
import loadingGif from "../assets/images/Halfmoon.gif"
import "./PokeModal.css"


const PokeModal = ({ closePokeModal, selectedPokemon, pokemonTeam, setPokemonTeam, isTeamView, pokeNickname, setPokeNickname, hasBeenGivenNickname, setHasBeenGivenNickname }) => {
	const [pokemonData, setPokemonData] = useState({})
	const [isLoading, setIsLoading] = useState(true)
	const [displayName, setDisplayName] = useState(selectedPokemon.name)
	const [nickname, setNickname] = useState("")
	// const [hasBeenGivenNickname, setHasBeenGivenNickname] = useState(false)
	const [showNicknameInput, setShowNicknameInput] = useState(false)

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
	}

	useEffect(() => {
		getPokemonData();
	}, [])

	const addPokemonToTeam = () => {
		setPokemonTeam([...pokemonTeam,
		{ name: pokemonData.name, id: pokemonData.id, data: pokemonData }])
	}

	const removePokemonFromTeam = (id) => {
		// let newTeam = pokemonTeam.splice(pokeIndex, 1);
		// let newList = peopleList.filter(x => x.id !== id)
		let pokeIndex = pokemonTeam.findIndex(i => i.name === selectedPokemon.name);

		let newTeam = pokemonTeam.filter((pokemon, index) => pokeIndex !== index)
		setPokemonTeam(newTeam)
		console.log("Removing ID", selectedPokemon.id);
		console.log("Original team: ", pokemonTeam);
		console.log(pokeIndex);
		console.log("New team: ", newTeam);
	}

	const handleNicknameInput = (e) => {
		setNickname(e.target.value)
	}

	const updateDisplayName = () => {
		if (nickname.length > 0 && nickname !== "") {
			setDisplayName(nickname)
			selectedPokemon.name = nickname;
			setHasBeenGivenNickname(true)
		}
		else {
			setDisplayName(selectedPokemon.name)

		}
		setShowNicknameInput(false)
	}

	const resetDisplayName = () => {
		setDisplayName(selectedPokemon.name)
		setShowNicknameInput(false)
		setHasBeenGivenNickname(false)
	}
	// If team view, show rename button, when pressed, show 
	return (

		<dialog className="poke-container-background" onClick={(e) => { e.stopPropagation(), closePokeModal(false) }}>
			<div className="poke-modal" onClick={(e) => {
				e.stopPropagation()
			}}>
				{isLoading ? <p>Loading..</p> : <>

					<div className="poke-modal__header">

						<ReactImageFallback
							src={pokemonData.sprites.other.dream_world.front_default}
							fallbackImage={pokemonData.sprites.other.home.front_default}
							initialImage={loadingGif}
							alt={pokemonData.name}
							className="poke-modal__sprite" />

						<div className="poke-modal__namebox">

							{showNicknameInput ?
								<div className="poke-modal__name-input_box">
									<input type="text" onBlur={() => { setShowNicknameInput(true) }} placeholder="Enter a nickname" className="poke-modal__name-input"
										autoFocus
										onChange={(e) => { handleNicknameInput(e) }}
									/>
									<button onClick={() => { updateDisplayName() }}>X</button>
									<button onClick={() => { resetDisplayName() }}>O</button>
								</div> : null}
							<div className="poke-modal__namebox_namebutton-container"><h2>{displayName.substring(0, 1).toUpperCase() + displayName.substring(1)}</h2> {isTeamView ? <button className="poke-modal__namebox__rename-button"
								onClick={() => { setShowNicknameInput(true) }}>O</button> : null}</div>

							{isTeamView ? <p className="poke-modal__namebox__originalname">({selectedPokemon.data.name})</p> : null}



						</div>

						<p className="poke-modal__header__hp">{pokemonData.stats[0].base_stat} / {pokemonData.stats[0].base_stat} HP </p>

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
						{isTeamView ? <button className="poke-modal__addremove-button" onClick={(e) => { e.stopPropagation, removePokemonFromTeam() }}> Remove from team </button> :
							<button className="poke-modal__addremove-button" onClick={(e) => { e.stopPropagation, addPokemonToTeam() }}> Add to team </button>}
					</div>

				</>}
			</div>

		</dialog>
	)
}

export default PokeModal
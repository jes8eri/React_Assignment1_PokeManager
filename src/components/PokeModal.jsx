import { useState, useEffect } from "react";
import ReactImageFallback from "react-image-fallback";
import PokeFallbackImg from "../assets/images/PokeFallbackImg.png";
import loadingGif from "../assets/images/Halfmoon.gif"
import EditNameIcon from "../assets/images/edit.png"
import YesIcon from "../assets/images/yes.png"
import NoIcon from "../assets/images/no.png"
import "./PokeModal.css"


const PokeModal = ({ closePokeModal, selectedPokemon, pokemonTeam, setPokemonTeam, isTeamView }) => {
	const [pokemonData, setPokemonData] = useState({})
	const [isLoading, setIsLoading] = useState(true)
	const [displayName, setDisplayName] = useState(selectedPokemon.name)
	const [nickname, setNickname] = useState("")
	const [hasBeenGivenNickname, setHasBeenGivenNickname] = useState(false)
	const [showNicknameInput, setShowNicknameInput] = useState(false)

	const pokemonTeamFull = pokemonTeam.length >= 27;

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
		if (pokemonTeam.length <= 27) {
			setPokemonTeam([...pokemonTeam,
			{ name: pokemonData.name, id: pokemonData.id, data: pokemonData }])
		}

	}

	const removePokemonFromTeam = () => {
		let pokeIndex = pokemonTeam.findIndex(i => i.name === selectedPokemon.name);
		let newTeam = pokemonTeam.filter((pokemon, index) => pokeIndex !== index)
		setPokemonTeam(newTeam)
		closePokeModal(false)
	}

	const handleNicknameInput = (e) => {
		setNickname(e.target.value)
	}

	const updateDisplayName = () => {
		if (nickname.length >= 1 && nickname !== "" && nickname.length < 20) {
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

	const constHandleNicknameKey = (e) => {
		if (e.key === "Enter") {
			updateDisplayName()
		}
		if (e.key === "Escape") {
			resetDisplayName()
		}
	}

	return (

		<div className="poke-container">
			<dialog className="poke-container__background" onClick={(e) => { e.stopPropagation(), closePokeModal(false) }}>
				<div className="poke-modal" onClick={(e) => {
					e.stopPropagation(), setShowNicknameInput(false)
				}}>
					{isLoading ? <p>Loading..</p> : <>

						<div className="poke-modal__header">

							<ReactImageFallback
								src={pokemonData.sprites.other.dream_world.front_default}
								fallbackImage={[pokemonData.sprites.other.home.front_default, pokemonData.sprites.front_default, PokeFallbackImg]}
								initialImage={loadingGif}
								alt={pokemonData.name}
								className="poke-modal__sprite" />

							<div className="poke-modal__namebox">
								{showNicknameInput ?
									<div className="poke-modal__name-input_box">
										<input type="text" onBlur={() => { "" }} placeholder="Enter a nickname" className="poke-modal__name-input"
											autoFocus
											onChange={(e) => { handleNicknameInput(e) }}
											onKeyUp={(e) => { constHandleNicknameKey(e) }}
										/>
										<button
											onClick={() => { updateDisplayName() }}> <img src={YesIcon} alt="Confirm" /></button>
										<button onClick={() => { resetDisplayName() }}> <img src={NoIcon} alt="Abort" /> </button>
									</div> : null}
								<div className="poke-modal__namebox_namebutton-container">

									<h2 className={showNicknameInput ? "poke-modal__namebox__name-hidden" : ""}>{displayName.substring(0, 1).toUpperCase() + displayName.substring(1)}</h2>

									{isTeamView && !showNicknameInput ?
										<button className="poke-modal__namebox__rename-button "
											onClick={(e) => { e.stopPropagation(), setShowNicknameInput(true) }}>
											<img src={EditNameIcon} alt="Edit name" />
										</button> : null}
								</div>
								{isTeamView ? <p className="poke-modal__namebox__originalname">({selectedPokemon.data.name})</p> : null}
							</div>

							<p className="poke-modal__header__hp">{pokemonData.stats[0].base_stat} / {pokemonData.stats[0].base_stat} HP </p>

						</div>
						<div className="poke-modal__body">

							<div className="poke-modal__infobox">
								<p><span>{pokemonData.weight / 10}kg </span>Weight</p>
								<div className="poke-modal__infobox__types">
									{pokemonData.types.map((type, index) => (<p key={index}>{type.type.name.toUpperCase()}</p>))}
								</div>
								<p>Type</p>
								<p><span>{pokemonData.height / 10}m</span> Height</p>
							</div>

							<div className="poke-modal-abilities">
								<h3>Abilities</h3>
								<div className="poke-modal-abilities__info">
									{pokemonData.abilities.map((ability, index) => (<p key={index}>{ability.ability.name.toUpperCase()}</p>))}
								</div>
							</div>

						</div>

						<div className="poke-modal__footer">
							{isTeamView ? <button className="poke-modal__addremove-button button-click" onClick={(e) => { e.stopPropagation, removePokemonFromTeam() }}> Remove from team </button> :
								<button disabled={pokemonTeamFull} className={pokemonTeamFull ? "poke-modal__addremove-button-disabled" : "poke-modal__addremove-button button-click"} onClick={(e) => { e.stopPropagation, addPokemonToTeam() }}> {pokemonTeamFull ? "Team full" : "Add to team"} </button>}
						</div>

					</>}
				</div>

			</dialog>
		</div>
	)
}

export default PokeModal
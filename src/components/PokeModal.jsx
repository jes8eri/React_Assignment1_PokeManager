import "./PokeModal.css"


const PokeModal = ({ closePokeModal, selectedPokemon }) => {
	return (
		<dialog className="poke-container-background" onClick={(e) => { e.stopPropagation(), closePokeModal(false) }}>
			<div className="poke-modal" onClick={(e) => { e.stopPropagation() }}>
				<div className="poke-modal__header">
					<h1>Test modal</h1>
				</div>
				<div className="poke-modal__body">
					<p>Test test test test</p>
					<p> {selectedPokemon.name}</p>
				</div>
			</div>
		</dialog>
	)
}

export default PokeModal
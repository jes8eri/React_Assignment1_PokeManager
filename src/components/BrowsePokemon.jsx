import { useState, useEffect } from "react";
import PokemonSearchCard from "./PokemonSearchCard";
import PokeModal from "./PokeModal";
import ReactPaginate from "react-paginate";
import SearchIcon from "../assets/icons/search.png";
import "./BrowsePokemon.css"
import "./Paginate.css"

// TODO: Reduce into smaller components? It's looking quite messy
// TODO: Add icons to paginate
// Fel: Pokemon bild+id uppdateras inte när man använder sig av paginator knapparna
const BrowsePokemon = ({ pokemonList, setPokemonList, pokemonTeam, setPokemonTeam }) => {
	const [openPokeModal, setOpenPokeModal] = useState(false);
	const [modalSelectedPokemon, setModalSelectedPokemon] = useState("")
	const [shownPokemon, setShownPokemon] = useState()

	// Paginate stuff
	const [pageNumber, setPageNumber] = useState(0)
	// on next button, get next slice?

	const pokemonPerPage = 27;
	const pokemonViewed = pageNumber * pokemonPerPage;
	const pageCount = Math.ceil(pokemonList.length / pokemonPerPage)
	const changePage = ({ selected }) => {
		setPageNumber(selected)

	}
	// -----------------------

	const displayPokemon = pokemonList.slice(pokemonViewed, pokemonViewed + pokemonPerPage).map((pokemon, index) => (
		<div className="TESTPOKEMON" key={index + 1}>
			<PokemonSearchCard pokemon={pokemon} pokemonId={index + 1} openPokeModal={setOpenPokeModal} selectedPokemon={setModalSelectedPokemon} />
		</div>
	));



	//TODO: Loading spinner css thingy
	// TODO: remove classname?
	// If not searching, show default pokemon list,
	return (
		<>
			{console.log(shownPokemon)}
			<div className="browse-pokemon-container">
				{openPokeModal ? <PokeModal closePokeModal={setOpenPokeModal} selectedPokemon={modalSelectedPokemon} /> : null}
				<section className="pokemon-search">
					<div className="input-container">
						<input type="text" placeholder="Search for a Pokemon" />
						<label className="pokemon-search__icon"> <img src={SearchIcon} alt="" /></label>
					</div>
				</section>

				<section className="pokemon-results">
					{console.log(shownPokemon)}
					<div className="pokemon-results__grid">
						{displayPokemon}
					</div>


				</section>
				<ReactPaginate
					previousLabel={"< Previous"}
					nextLabel={"Next >"}
					pageCount={pageCount}
					onPageChange={changePage}
					containerClassName={"pagination-container"}
					previousLinkClassName={pageNumber > 0 ? "pagination-prev" : "pagination-disabled"}
					nextLinkClassName={pageNumber < pageCount - 1 ? "pagination-next" : "pagination-disabled"}
					disabledClassName={"pagination-disabled"}
					activeClassName={"pagination-active"}
				/>
			</div>
		</>
	)
}

export default BrowsePokemon
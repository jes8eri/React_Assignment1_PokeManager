import { useState, useEffect } from "react";
import PokemonSearchCard from "./PokemonSearchCard";
import PokeModal from "./PokeModal";
import ReactPaginate from "react-paginate";
import "./BrowsePokemon.css"
import "./Paginate.css"

// TODO: Reduce into smaller components? It's looking quite messy
// TODO: Add icons to paginate
const BrowsePokemon = ({ pokemonList, setPokemonList, pokemonTeam, setPokemonTeam }) => {
	const [openPokeModal, setOpenPokeModal] = useState(false);
	const [modalSelectedPokemon, setModalSelectedPokemon] = useState("")

	const [pageNumber, setPageNumber] = useState(0)

	const pokemonPerPage = 27;
	const pagesVisited = pageNumber * pokemonPerPage;
	const pageCount = Math.ceil(pokemonList.length / pokemonPerPage)
	const changePage = ({ selected }) => {
		setPageNumber(selected)
	}

	const displayPokemon = pokemonList.slice(pagesVisited, pagesVisited + pokemonPerPage).map((pokemon) => (
		<div className="TESTPOKEMON" key={pokemon.id}>
			<PokemonSearchCard pokemon={pokemon} openPokeModal={setOpenPokeModal} selectedPokemon={setModalSelectedPokemon} />
		</div>
	));


	//TODO: Loading spinner css thingy
	// TODO: remove classname?
	// If not searching, show default pokemon list,
	return (
		<>
			<div className="browse-pokemon-container">
				{openPokeModal ? <PokeModal closePokeModal={setOpenPokeModal} selectedPokemon={modalSelectedPokemon} /> : null}
				<section className="pokemon-search">
					<div className="input-container">
						<input type="text" placeholder="Search for a Pokemon" />
						<label className="pokemon-search__icon">S</label>
					</div>
				</section>

				<section className="pokemon-results">

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
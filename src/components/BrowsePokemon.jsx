import { useState, useEffect } from "react";
import PokemonSearchCard from "./PokemonSearchCard";
import PokeModal from "./PokeModal";
import ReactPaginate from "react-paginate";
import SearchIcon from "../assets/icons/search.png";
import "./BrowsePokemon.css"
import "./Paginate.css"

// TODO: Reduce into smaller components? It's looking quite messy
// TODO: Add icons to paginate
// TODO: reuse pokemonList.indexOf(pokemon)+1 
// Fel: Pokemon bild+id uppdateras inte när man använder sig av paginator knapparna
const BrowsePokemon = ({ pokemonList, setPokemonList, pokemonTeam, setPokemonTeam }) => {
	const [openPokeModal, setOpenPokeModal] = useState(false);
	const [modalSelectedPokemon, setModalSelectedPokemon] = useState("");
	const [searchInput, setSearchInput] = useState("");
	const [pageNumber, setPageNumber] = useState(0)

	const pokemonPerPage = 27;
	const pokemonViewed = pageNumber * pokemonPerPage;
	const pageCount = Math.ceil(pokemonList.length / pokemonPerPage)
	const changePage = ({ selected }) => {
		setPageNumber(selected)

	}
	// -----------------------
	const pokemonSearchResult = pokemonList.filter(pokemon => {
		if (searchInput === "") {
			return pokemon;
		}
		else if (pokemon.name.toLowerCase().includes(searchInput)) {
			return pokemon;
		}
	});

	const displayPokemon = pokemonList.slice(pokemonViewed, pokemonViewed + pokemonPerPage).map((pokemon) => (
		<li key={pokemonList.indexOf(pokemon) + 1}>
			<PokemonSearchCard pokemon={pokemon} pokemonId={pokemonList.indexOf(pokemon) + 1} openPokeModal={setOpenPokeModal} selectedPokemon={setModalSelectedPokemon} />
		</li>
	));

	const displayPokemonSearchResult = pokemonSearchResult.map((pokemon) => (
		<li key={pokemonList.indexOf(pokemon) + 1}>
			<PokemonSearchCard pokemon={pokemon} pokemonId={pokemonList.indexOf(pokemon) + 1} openPokeModal={setOpenPokeModal} selectedPokemon={setModalSelectedPokemon} />
		</li>
	));

	// TODO: remove classname?
	return (
		<>
			<div className="browse-pokemon-container">
				{openPokeModal ? <PokeModal closePokeModal={setOpenPokeModal} selectedPokemon={modalSelectedPokemon} /> : null}
				<section className="pokemon-search">
					<div className="input-container">
						<input type="text" placeholder="Search for a Pokemon" onChange={(e) => { setSearchInput(e.target.value.toLowerCase()) }} />
						<label className="pokemon-search__icon"> <img src={SearchIcon} alt="" /></label>
					</div>
				</section>

				<section className="pokemon-results">

					<div className="pokemon-results__grid">
						{searchInput === "" ? displayPokemon : displayPokemonSearchResult}
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
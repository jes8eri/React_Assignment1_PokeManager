import { useState, useEffect } from 'react'
import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom"
import Start from "./components/Start"
import BrowsePokemon from "./components/BrowsePokemon"
import TeamBuilder from "./components/TeamBuilder"
import NavBar from './components/NavBar'
import './App.css'

/**TODO: 
 * Divide App into smaller components (ex Routing).

 * Decide on fonts. 
 * Icon / images assets.
 *  
 * Pagination component for easier page creation?
 * 
 * Add to team/remove from team functionality
 * Inform user when trying to add pokemon to full team
 * Edit name in detailed-team-view-modal?
 * 
 * API stuff
 *    - Pokemon states, list of pokemons (next, prev button), selected pokemon, retrieve more data from api when clicking on "i for info"-button.
 *    - "Loading" 
 * 
 * CSS stuff

      - icons + favicon
 *    - "Root"-css file with default colours/fonts, import into other css-files.
 *    - Selected NavLink styling (moving pokeball?)
 * 
 *    - Pokemon "card" to display info when clicked.
 *      Modal? Lift to top level state to reuse easier, plus cover entire screen?
 
 *    - Browse Pokemon view - SearchBar in fitting box on top, larger box underneath with 25/50 pokemon per "next/prev"-page.
 *    - Style scrollbar in index.css
 * 
 *    
 */


function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [pokemonTeam, setPokemonTeam] = useState([])
  const [pokemonData, setPokemonData] = useState(null)
  // + Add/Remove pokemon methods to send as params?

  const url = ("https://pokeapi.co/api/v2/pokemon")

  // Gets all the API data and shoves it in a list, semi-caching?
  // const getPokemonData = async (limit = 151, offset = 0) => {
  //   // "opens up" the data to get the url
  //   const apiResponse = await fetch(`${url}?limit=${limit}&offset=${offset}`)
  //   const apiDataWithUrl = await apiResponse.json();
  //   // "opens up" the url data
  //   const getPokemonData = apiDataWithUrl.results.map(async (pokemon) => {
  //     const response = await fetch(pokemon.url)
  //     console.log("fetching..", response);
  //     return await response.json()

  //   })
  //   console.log("Fetched data!");
  //   const results = await Promise.all(getPokemonData) // "unlocks" the promise containing the data from the url
  //   setPokemonList(results)

  // }

  const getPokemonNames = async (limit = 151, offset = 0) => {
    const apiResponse = await fetch(`${url}?limit=${limit}&offset=${offset}`)
    const data = await apiResponse.json();
    console.log("data results: ", data.results);
    setPokemonList(data.results)
    console.log(pokemonList);
  }

  useEffect(() => {
    getPokemonNames()

  }, [])

  return (
    <Router>
      <div className="App">

        <header className="App-header"> <h1> PokeBuilder </h1>
          <NavBar />
        </header>

        <main className='content'>
          <Routes>
            <Route path="/browsepokemon" element={<BrowsePokemon
              pokemonList={pokemonList} setPokemonList={setPokemonList}
              pokemonTeam={pokemonTeam} setPokemonTeam={setPokemonTeam} />} />
            <Route path='/teambuilder' element={<TeamBuilder
              pokemonTeam={pokemonTeam} setPokemonTeam={setPokemonTeam} />} />
            <Route path='/*' element={<Start />} />
          </Routes>
        </main>
        <footer> <p>This is a footer</p> </footer>
      </div>
    </Router>
  )
}

export default App

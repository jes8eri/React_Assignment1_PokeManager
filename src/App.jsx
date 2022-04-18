import { useState, useEffect } from 'react'
import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom"
import Start from "./components/Start"
import BrowsePokemon from "./components/BrowsePokemon"
import TeamBuilder from "./components/TeamBuilder"
import NavBar from './components/NavBar'
import './App.css'

/**TODO: 
 * Divide App into smaller components (ex Routing).
 * Fixed footer at bottom.
 * Decide on fonts. 
 * Icon / images assets.
 * 
 * API stuff
 *    - Pokemon states, list of pokemons (next, prev button), selected pokemon, retrieve more data from api when clicking on "i for info"-button.
 *    - "Loading" 
 * 
 * CSS stuff
 *    - *** make input fields shrink properly ***
 *    - Decide on colour-scheme
 *    - "Root"-css file with default colours/fonts, import into other css-files.
 *    - Selected NavLink styling (moving pokeball?)
 *    - Pokemon "card" to display info when clicked.
 *    - Pokemon Team grid (empty or filled with pokemon)
 *    - Browse Pokemon view - SearchBar in fitting box on top, larger box underneath with 25/50 pokemon per "next/prev"-page.
 *    - Style scrollbar in index.css
 * 
 * Extra
 *    - Splashscreen (opening pokeball?)
 *    - Animations?
 *    - Colour theme selector? (Fire Red/Leaf Green etc)
 */
// Get pokemon name + url
// Get pokemon data


const tempPokemon = [
  { name: "bulbasaur", id: 1, picture: "[PICTURE]" },
  { name: "bulbasaur", id: 2, picture: "[PICTURE]" },
  { name: "bulbasaur", id: 3, picture: "[PICTURE]" },
  { name: "bulbasaur", id: 4, picture: "[PICTURE]" },
  { name: "bulbasaur", id: 5, picture: "[PICTURE]" },
  { name: "bulbasaur", id: 6, picture: "[PICTURE]" },
  { name: "bulbasaur", id: 7, picture: "[PICTURE]" },
  { name: "bulbasaur", id: 8, picture: "[PICTURE]" },
  { name: "bulbasaur", id: 9, picture: "[PICTURE]" },
  { name: "bulbasaur", id: 10, picture: "[PICTURE]" },
  { name: "bulbasaur", id: 11, picture: "[PICTURE]" },
  { name: "bulbasaur", id: 12, picture: "[PICTURE]" },
  { name: "bulbasaur", id: 13, picture: "[PICTURE]" },
  { name: "bulbasaur", id: 14, picture: "[PICTURE]" },
  { name: "bulbasaur", id: 15, picture: "[PICTURE]" },
  { name: "bulbasaur", id: 16, picture: "[PICTURE]" },
  { name: "bulbasaur", id: 17, picture: "[PICTURE]" },
  { name: "bulbasaur", id: 18, picture: "[PICTURE]" },
  { name: "bulbasaur", id: 19, picture: "[PICTURE]" },
  { name: "bulbasaur", id: 20, picture: "[PICTURE]" },
  { name: "bulbasaur", id: 21, picture: "[PICTURE]" },
  { name: "bulbasaur", id: 22, picture: "[PICTURE]" },
  { name: "bulbasaur", id: 23, picture: "[PICTURE]" },
  { name: "bulbasaur", id: 24, picture: "[PICTURE]" },
  { name: "bulbasaur", id: 25, picture: "[PICTURE]" },];

function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [pokemonTeam, setPokemonTeam] = useState([])

  const url = ("https://pokeapi.co/api/v2/pokemon")

  // Gets all the API data and shoves it in a list, semi-caching?
  const getPokemonData = async (limit = 27, offset = 0) => {
    // "opens up" the data to get the url
    const apiResponse = await fetch(`${url}?limit=${limit}&offset=${offset}`)
    const apiDataWithUrl = await apiResponse.json();
    // "opens up" the url data
    const getTestData = apiDataWithUrl.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url)
      return await response.json()

    })

    const results = await Promise.all(getTestData) // "unlocks" the promise containing the data from the url
    setPokemonList(results)

  }


  useEffect(() => {
    getPokemonData()
  }, [])

  return (
    <Router>
      <div className="App">

        <header className="App-header"> <h1> Placeholder </h1>
          <NavBar />
        </header>

        <main className='content'>
          <Routes>
            <Route path="/browsepokemon" element={<BrowsePokemon
              pokemonList={pokemonList} setPokemonList={setPokemonList}
              pokemonTeam={pokemonTeam} setPokemonTeam={setPokemonTeam} />} />
            <Route path='/teambuilder' element={<TeamBuilder
              pokemonTeam={pokemonTeam} setPokemonTeam={setPokemonTeam}
            />} />
            <Route path='/*' element={<Start />} />
          </Routes>
        </main>
        {console.log(pokemonList)}
        <footer> <p>This is a footer</p> </footer>
      </div>
    </Router>
  )
}

export default App

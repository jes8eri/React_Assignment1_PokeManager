import { useState, useEffect } from 'react'
import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom"
import Start from "./components/Start"
import BrowsePokemon from "./components/BrowsePokemon"
import TeamBuilder from "./components/TeamBuilder"
import NavBar from './components/NavBar'
import Credits from './components/Credits'
import ScrollUpButton from "./components/ScrollUpButton";
import './App.css'

/**TODO: 
 *     * Divide the larger components into smaller components.
 *     * Organize the components folder using sub-folders.
 *     * Sticky navbar that changes background colour when scrolled down a certain amount.
 *     * Only show "Scroll up"-button when at a certain scroll position.
 *     * The react-image-fallback module is old and needs to be manually updated.
 * 
 *      CSS stuff
 *        - Selected NavLink styling (moving pokeball?)
 */


function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [pokemonTeam, setPokemonTeam] = useState([])

  const url = ("https://pokeapi.co/api/v2/pokemon")

  // Get all Pokemon names in one API request to allow for better searching, get the inner-url details later.
  // Is kinder to the API probably, but makes it harder to get the corresponding pokemon image. Otherwise to get all pokemon images directly there'd be 1000+ API requests at once which might be a bit much.
  const getPokemonNames = async (limit = 10000, offset = 0) => {
    const apiResponse = await fetch(`${url}?limit=${limit}&offset=${offset}`)
    const data = await apiResponse.json();
    setPokemonList(data.results)
  }

  useEffect(() => {
    getPokemonNames()
  }, [])


  return (
    <Router>
      <div className="App">
        <header className="App-header"> <h1> Poké Manager </h1>
        </header>
        <NavBar />
        <main className='content'>
          <Routes>
            <Route path="/browsepokemon" element={<BrowsePokemon
              pokemonList={pokemonList} setPokemonList={setPokemonList}
              pokemonTeam={pokemonTeam} setPokemonTeam={setPokemonTeam}
              isTeamView={false}
            />} />
            <Route path='/teambuilder' element={<TeamBuilder
              pokemonTeam={pokemonTeam}
              setPokemonTeam={setPokemonTeam}
              isTeamView={true} />} />
            <Route path="/credits" element={<Credits />} />
            <Route path='/*' element={<Start />} />
          </Routes>
        </main>
        <ScrollUpButton />
        <footer> <NavLink to="/credits"> Credits | About </NavLink> </footer>
      </div>
    </Router>
  )
}

export default App

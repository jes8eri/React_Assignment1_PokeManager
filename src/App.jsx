import { useState, useEffect } from 'react'
import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom"
import Start from "./components/Start"
import BrowsePokemon from "./components/BrowsePokemon"
import TeamBuilder from "./components/TeamBuilder"
import NavBar from './components/NavBar'
import ScrollUpButton from "./components/ScrollUpButton";
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
 *    Modal: reuse the pokemonmodal. Add buttons for /removefromteam/editname, hide unless the modal opens from teambuilder. +reserved space for "your team appears to be full"
 *    pass addtoteam+removefromteam functions down to modal component for use in both browsepokemon+teambuilder views
 *    picture url in state to save as semi caching?
 *    
 *    nickname - store original name and allow user to revert with button
 *    navbar outside header, fixed, smaller?
 *    navbar same background as content, so it looks like it fits with content instead of header, rounded borders on top 
 */


function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [pokemonTeam, setPokemonTeam] = useState([])

  const url = ("https://pokeapi.co/api/v2/pokemon")

  // Get all Pokemon names in one API request to allow for better searching, get the inner-url details later.
  // Is kinder to the API probably, but makes it harder to get the corresponding pokemon image. Otherwise to get all pokemon images there'd be 1000+ API requests which might be a bit much.
  const getPokemonNames = async (limit = 899, offset = 0) => {
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
            <Route path='/*' element={<Start />} />
          </Routes>
        </main>
        <ScrollUpButton />
        <footer> <p >Click for credits/attribution</p> </footer>
      </div>
    </Router>
  )
}

export default App

import { useState } from 'react'
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
 * 
 * CSS stuff
 *    - *** make input fields shrink properly ***
 *    - Decide on colour-scheme
 *    - "Root"-css file with default colours/fonts, import into other css-files.
 *    - Selected NavLink styling (moving pokeball?)
 *    - Pokemon "card" to display info when clicked.
 *    - Pokemon Team grid (empty or filled with pokemon)
 *    - Browse Pokemon view - SearchBar in fitting box on top, larger box underneath with 25/50 pokemon per "next/prev"-page.
 * 
 * Extra
 *    - Splashscreen (opening pokeball?)
 *    - Animations?
 *    - Colour theme selector? (Fire Red/Leaf Green etc)
 */

function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header"> <h1> Placeholder </h1>
          <NavBar />
        </header>

        <main className='content'>
          <Routes>
            <Route path="/browsepokemon" element={<BrowsePokemon />} />
            <Route path='/teambuilder' element={<TeamBuilder />} />
            <Route path='/*' element={<Start />} />
          </Routes>
        </main>

        <footer> <p>This is a footer</p> </footer>
      </div>
    </Router>
  )
}

export default App

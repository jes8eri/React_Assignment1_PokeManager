import { useState } from 'react'
import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom"
import Start from "./components/Start"
import BrowsePokemon from "./components/BrowsePokemon"
import TeamBuilder from "./components/TeamBuilder"
import NavBar from './components/NavBar'
import './App.css'

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
        <footer></footer>
      </div>
    </Router>
  )
}

export default App

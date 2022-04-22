import "./Start.css"
import ProfOakImg from "../assets/images/prof-oak.png"
import PokeCircle from "../assets/images/poke-circle.png"
import PikaCircle from "../assets/images/pika-circle.png"
import PokedexCircle from "../assets/images/pokedex-circle.png"

const Start = () => {

	return (

		<div className="start-container">
			<section className="prof-oak-infobox">
				<div className="prof-oak-infobox__text">
					<div className="prof-oak-infobox-bubble">
						<h3>Hello there! Welcome to the world of Pokémon!</h3>
						<p>My name is Oak! People call me the Pokémon Prof!  </p>
						<p> This world is inhabited by creatures called Pokémon! </p>
						<p>For some people, Pokémon are pets. Other use them for fights. Myself… I study Pokémon as a profession.</p>
					</div>

				</div>
				<img src={ProfOakImg} alt="Prof Oak" />
			</section>

			<section className="info-section">
				<div className="pokedex-infobox">
					<img src={PokedexCircle} alt="Pokedex symbol" />
					<p>Use the PokeDex to browse through all Pokemon. Click on a pokemon to view more information about it. And why not go ahead and add it to your team as a favourite!</p>
				</div>

				<div className="team-infobox">
					<img src={PikaCircle} alt="Pokemon symbol" />
					<p> Use the Team Viewer to view your team. You can rename your pokemon by clicking on the pencil icon. Build your ultimate Pokemon team, or just add them as favourites to keep track of them all.</p>
				</div>
			</section>

		</div>
	)
}

export default Start
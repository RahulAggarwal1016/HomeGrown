import React from "react";
import "./css/SearchStyles.css";
import {searchFunction} from "./js/SearchFunction.js";

const SearchBusinesses = () => {
	return (
		<div className="searchBusinesses">
			<h2 id="header">Your local businesses</h2>

			<input type="text" id="search-input" onkeyup={searchFunction} placeholder="Search for local businesses by name, address, or tags and services" title="Type in a name"/>

			<ul id="ul-content">
				<li><a href="https://trailsendmarket.com/"><h3 class="title">Trails End Market</h3>4370 Dundas St, Thorndale, ON<p class="hidden">Market Fresh food weekends furniture highway animals</p></a></li>
				
				<li><a href="https://www.rolipoliicecream.com/"><h3 class="title">Roli Poli Ice Cream</h3>484 Richmond St, London, ON<p class="hidden">restaurants Ice cream vegan downtown fresh food dairy-free dairy free cafes
			</p></a></li>
				
				<li><a href="https://www.trailerhitch.ca/"><h3 class="title">Trailer Hitch Center</h3>1933 Gore Rd, London, ON<p class="hidden">summer free july august outdoors nature trailer truck accessories</p></a></li>
				
				<li><a href="https://www.markyscrepecafe.com/"><h3 class="title">Marky’s Crepe Cafe</h3>484 Richmond St Unit 478,
			London, ON<p class="hidden">Cafes Crepes Restaurants Food drinks downtown morning breakfast fresh
			</p></a></li>

				<li><a href="https://coventmarket.com/"><h3 class="title">Covent Garden Market</h3>130 KING STREET LONDON ON<p class="hidden">market downtown fresh food restaurants outdoors cookie cake pasta
			</p></a></li>

				<li><a href="https://www.arvaflourmill.com/"><h3 class="title">Arva Flour Mills</h3>
			2042 Elgin St London, Ontario <p class="hidden">flour fresh food arva generations mill organic natural eggs dairy
			</p></a></li>
				
				<li><a href="https://nutsforcheese.com/"><h3 class="title">Nuts for Cheese</h3>London, ON<p class="hidden">vegan dairy-free dairy free food cheese manufacture manufacturer</p></a></li>
			

			</ul>
		{/* <script type="text/javascript" src="./js/SearchFunction"></script> */}

		</div>
	);
};

export default SearchBusinesses;
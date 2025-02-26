/**
 * Extract id as string from url to pokemon
 * @param {string} pokemonUrl - a url to a pokemon from pokeApi 
 * @returns {string}
 */
function getIdFromPokemon(pokemonUrl) {
    return pokemonUrl.slice(0, -1).split("/").pop()
}

let search = window.location.search
let params = new URLSearchParams(search)



let pokeName = params.get("name")


let sectionElm = document.createElement("section")
sectionElm.classList.add("columns")

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}/`)
    .then(response => response.json())
    .then(species => {

        let flavorTextEntry = species.flavor_text_entries.find(entry => entry.language.name ==="en");
        let flavorText = flavorTextEntry ? flavorTextEntry.flavor_text.replace(/\n|\f/g, ' ') : "No description available.";

        console.log(flavorText); // Display in the console
        document.getElementById("pokemon-description").textContent = flavorText; // Example: Display in an HTML element
    })


fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(response => response.json())
    .then(pokemon => {
        console.log(pokemon);

        sectionElm.innerHTML =`
        
<article  class="pokedex__pokemon-container_details no-columns " >
    
<p class="pokemon-name_detail">${pokemon.name} </p>
<p>#${pokemon.id.toString().padStart(4, "0")}</p>



        <figure class="pokemon-figure_details ">
            <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
        </figure>
        <section class="pokemon_info-text">
            <p>weight</p>
        <p>${pokemon.weight}</p>
        <p>height</p>
 <p>${pokemon.height}</p>
 <p>abilities</p>
 <p class="pokemon_abilities">${pokemon.abilities.map(ability => ability.ability.name).join(",")}</p>
 </section>
        </article>

   
        
<p class="pokedex_details_stat-text">
    base stats
</p>    

        <table class="progress">
            ${pokemon.stats.map(function(singleStat){
                return `
                <tr >
                <th >${singleStat.stat.name}</th>
                <td>${singleStat.base_stat}</td>
                <td class="pokedex__pokemon-progressbar"><meter id="file" max="250" value="${singleStat.base_stat}"></td>
                </tr>
                `
            }).join("")
            }
        </table>


        `

document.querySelector("main").append(sectionElm)
    })
 

  


    


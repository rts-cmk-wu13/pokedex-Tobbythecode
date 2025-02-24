/**
 * Extract id as string from url to pokemon
 * @param {string} pokemonUrl - a url to a pokemon from pokeApi 
 * @returns {string}
 */
function getIdFromPokemon(pokemonUrl) {
    return pokemonUrl.slice(0, -1).split("/").pop()
}
const artworkUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork"

    let sectionElm = document.createElement("section")
    sectionElm.className = "pokelist"

    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(function(response) {
        return response.json()
    }).then(
        function(data) {
            sectionElm.innerHTML =  data.results.map(pokemon => `
          

    <article class="pokedex__pokemon-container">
    <p class="pokemon__number-tag">#${getIdFromPokemon(pokemon.url).padStart(4, "0")}</p>
    <figure class="pokemon-figure">
    <img src="${artworkUrl}/${getIdFromPokemon(pokemon.url)}.png" alt="${pokemon.name}">
    </figure>
    <p class="pokemon-name">${pokemon.name} </p>
    <a class="pokedex__pokemon-link" href="/pokemon_details.html?name=${pokemon.name}"></a>
    </article> 

    `).join("")
                
              

            

            
            }
        )




    document.querySelector("main").append(sectionElm)
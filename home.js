function getIdFromPokemon(pokemonUrl) {
    return pokemonUrl.slice(0, -1).split("/").pop()
}
const artworkUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork"

    let sectionElm = document.createElement("section")
    sectionElm.className = "pokelist"

    fetch("/data/pokemon.json")
    .then(function(response) {
        return response.json()
    }).then(
        function(data) {
            sectionElm.innerHTML =  data.map(pokemon => `

    <article>
    <figure class="pokemon-figure">
    <img src="${artworkUrl}/${getIdFromPokemon(pokemon.url)}.png" alt="${pokemon.name}">
    </figure>
    <p class="pokemon-name">${pokemon.name} </p>
    <a href="pokemon_details.html?id=${pokemon.url}" >
          
          More
          
          </a>
    </article> 
    `).join("")
                
              

            

            
            }
        )




    document.querySelector("main").append(sectionElm)
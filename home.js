/**
 * Extract id as string from url to pokemon
 * @param {string} pokemonUrl - a url to a pokemon from pokeApi 
 * @returns {string}
 */
function getIdFromPokemon(pokemonUrl) {
    return pokemonUrl.slice(0, -1).split("/").pop()
}
const artworkUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork"

const observer = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){
        if(entry.isIntersecting) {
            // stuff
       currentOffset = currentOffset + 50

       if( currentOffset < 1304){

        fetchPokemon(currentOffset)
       }else{
        console.log("no more pokemon");
       }
     
}
    })
})

// const imgObserver = new IntersectionObserver(function(entries){

//     entries.forEach(function(entry){

// if(entry.isIntersecting){

//     entry.target.src = entry.target.dataset.imagesrc
//     imgObserver.unobserve(entry.target)
// }
//     })
// })

let headerElm = document.createElement("nav");
headerElm.className = "Header_main"

headerElm.innerHTML = `
<section class="pokedex-container">
    <article class="pokedex-header">
        <h1>Pokédex</h1>
        <figure class="pokedex-figure-header">
            <img src="/images/pokeball.png" alt="Pokéball">
        </figure>
    </article>
    <form action="get" class="pokedex-form">
        <input type="text" placeholder=" Search">
        <button type="submit">Search</button>
    </form>
</section>
`;


document.querySelector("header").append(headerElm)

    let sectionElm = document.createElement("section")
    sectionElm.className = "pokelist"



    let currentOffset = 0
    
    function fetchPokemon(offset){
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=50`)
    .then(function(response) {
        return response.json()
    }).then(
        function(data) {
            sectionElm.innerHTML +=  data.results.map(pokemon => `
  
    <article class="pokedex__pokemon-container">
    <p class="pokemon__number-tag">#${getIdFromPokemon(pokemon.url).padStart(4, "0")}</p>
    <figure class="pokemon-figure">
    <img loading="lazy"  class="poke__img"  src="${artworkUrl}/${getIdFromPokemon(pokemon.url)}.png" alt="${pokemon.name}" >
    </figure>
    <p class="pokemon-name">${pokemon.name} </p>
    <a class="pokedex__pokemon-link" href="/pokemon_details.html?name=${pokemon.name}"></a>
    </article> 

    `).join("")
                
              

            
let observedPokemon = sectionElm.querySelector("article:nth-last-child(5)")
observer.observe(observedPokemon)   

// let observedImgs = sectionElm.querySelectorAll("poke__img")
// console.log(observedImgs)
// observedImgs.forEach(function(observedImgs){

// imgObserver.observe(observedImgs)

// })

            }
        )

    


    document.querySelector("main").append(sectionElm)

}
    fetchPokemon(currentOffset)
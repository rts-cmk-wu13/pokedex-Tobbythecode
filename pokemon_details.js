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




fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(response => response.json())
    .then(pokemon => {
        console.log(pokemon);

        fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}/`)
        .then(response => response.json())
        .then(species => {
  
            let flavorTextEntry = species.flavor_text_entries.find(entry => entry.language.name === "en");
            let flavorText = flavorTextEntry ? flavorTextEntry.flavor_text.replace(/\n|\f/g, ' ') : "No description available.";

    

        sectionElm.innerHTML =`
        
<article  class="pokedex__pokemon-container_details no-columns " >
    <div class="pokemon__name_info_tag">
<p class="pokemon-name_detail">${pokemon.name} </p>
<p class="pokemon__tag-num">#${pokemon.id.toString().padStart(4, "0")}</p>
</div>


        <figure class="pokemon-figure_details ">
            <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
        </figure>
        <p class="pokemon_typing">${pokemon.types.map(type => type.type.name).join(",")}</p>
        <p class="pokedex_details_about-text">
  About
</p>    
        <section class="pokemon_info-text">
            <div>
            <span>${pokemon.weight}</span>
            <p>weight</p>
      
       
        </div>
        <div>
             <span>${pokemon.height}</span>
        <p>height</p>

 </div>
 <div> 
        

 <span class="pokemon_abilities">${pokemon.abilities.map(ability => ability.ability.name).join(",")}</span>
 <p>abilities</p>


 </div>
 </section>
 <p class="pokemon__flavor-text">${flavorText}</p>
        </article>

   
        
<p class="pokedex_details_stat-text">
    base stats
</p>    

        <table class="progress">
            ${pokemon.stats.map(function(singleStat){
                return `
                <tr >
                <th class="pokemon__stat_name">${singleStat.stat.name}</th>
                <td class="pokemon__stat_number">${singleStat.base_stat}</td>
                <td class="pokedex__pokemon-progressbar"><meter id="file" max="250" value="${singleStat.base_stat}"></td>
                </tr>
                `
            }).join("")
            }
        </table>


        `
    })
})
document.querySelector("main").append(sectionElm)

 

  


    


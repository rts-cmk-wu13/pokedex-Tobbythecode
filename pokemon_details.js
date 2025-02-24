let search = window.location.search
let params = new URLSearchParams(search)



let pokeName = params.get("name")


let sectionElm = document.createElement("section")
sectionElm.classList.add("columns")


fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(response => response.json())
    .then(pokemon => {

        sectionElm.innerHTML =`
        
<article  class="pokedex__pokemon-container" >
        <figure class="pokemon-figure">
            <img src="${pokemon.sprites.other["official-artwork"].front_default}" alt="${pokemon.name}">
        </figure>
        <p class="pokemon-name">${pokemon.name} </p>
        </article>
        `

document.querySelector("main").append(sectionElm)
    })
 

  


    


    let sectionElm = document.createElement("section")
    sectionElm.className = "pokelist"

    fetch("/data/pokemon.json")
        .then(function (response) {

            return response.json()

        }).then(
            function (data) {
            
            sectionElm.innerHTML = data.map(function (pokemon) {

            let id = pokemon.url.slice(0, -1).split("/").pop()
         

        

           



                    return `
    <article >

    <figure class="pokemon-figure">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" alt="">
    </figure>
    <p class="pokemon-name">${pokemon.name} </p>
    <a href="pokemon_details.html?id=${pokemon.url}" >
          
          More
          
          </a>
    </article>


    `
                
                }).join("")

            

                // sectionElm.append(divElm)
            }
        )




    document.querySelector("main").append(sectionElm)
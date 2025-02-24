let search = window.location.search
let params = new URLSearchParams(search)
console.log(params);
let id = params.get("id")
console.log(id);

let mainElm = document.createElement("main")
document.querySelector("#root").append(mainElm)

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
       
       <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png" alt="">
`
}).join("")

})




    
document.querySelector("main").append(sectionElm)



let divElm = document.createElement("div")

divElm.id = "root"

divElm.innerHTML = `

<header>
<span class="brand">pokedex</span>
</header>
<main>

</main>
<footer>
created 2025
</footer>`

document.querySelector("body").append(divElm)
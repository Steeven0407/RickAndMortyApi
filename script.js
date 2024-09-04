const personajesDIV = document.getElementById("personajes")
const btnAtras = document.getElementById("btnAtras")
const btnSgte = document.getElementById("btnSgte")



let pagina = 1;
let url = `https://rickandmortyapi.com/api/character?page=${pagina}`


async function fetchPsj(url) {
    try {
        let response = await fetch(url)
        let data = await response.json();
        let personajes = data.results
        console.log(personajes);
        personajes.forEach(personaje => {
            const card = document.createElement("div")
            card.className = "personaje"
            const img = document.createElement("img");
            img.className = "imagen"
            img.src = personaje.image
            card.appendChild(img)
            const name = document.createElement("h1")
            name.className = "nombre"
            name.textContent = "Nombre: " + personaje.name
            card.appendChild(name)
            const estado = document.createElement("h2")
            estado.classList = "estado"
            estado.textContent = "Estado: " + personaje.status
            card.appendChild(estado)
            if (personaje.status == "Alive") {
                card.classList.add("vivo")
            } else if (personaje.status == "Dead") {
                card.classList.add("muerto")
            } else {
                card.classList.add("desconocido")
            }
            const especie = document.createElement("h2")
            especie.classList.add("Especie")
            especie.textContent = "Especie: " + personaje.species
            card.appendChild(especie)
            const genero = document.createElement("h2")
            genero.className = "genero"
            genero.textContent = "Genero: " + personaje.gender
            card.appendChild(genero)



            personajesDIV.appendChild(card)

        });


    } catch (error) {
        console.log(error);
    }
}

fetchPsj(url);

btnAtras.addEventListener("click", () => {
    if (pagina == 1) {
        pagina = 42
        url = `https://rickandmortyapi.com/api/character?page=${pagina}`
        personajesDIV.innerHTML = ""
        fetchPsj(url)
    } else {
        pagina--
        url = `https://rickandmortyapi.com/api/character?page=${pagina}`
        personajesDIV.innerHTML = ""
        fetchPsj(url)
    }
})

btnSgte.addEventListener("click", () => {
    if (pagina == 42) {
        pagina = 1
        url = `https://rickandmortyapi.com/api/character?page=${pagina}`
        personajesDIV.innerHTML = ""
        console.log(pagina);
        fetchPsj(url)
    } else {
        pagina++
        url = `https://rickandmortyapi.com/api/character?page=${pagina}`
        personajesDIV.innerHTML = ""
        console.log(pagina);
        fetchPsj(url)
    }
})
const poke_container = document.querySelector('.poke-container')
const pokemon_count = 151
const fetchPokemons = async() => {
    for(let i = 1; i < pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async(id) => {
     const url = `https://pokeapi.co/api/v2/pokemon/${id}`
     const res = await fetch(url)
     const data = await res.json()

     craetePokemonCard(data)
}
const craetePokemonCard = (pokemon) => {

const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
const id = pokemon.id.toString().padStart( 3, '0')

  const poke_types = pokemon.types.map(type => type.type.name)
   


    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')
    const  pokemonInnerHTML = `
    <div class="img-container">
    <img src="https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg" alt="">
   </div>
  <div class="info">
    <span class="number">#${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <small>${poke_types[0]}</small></small>
  </div>
    `
    

    pokemonEl.innerHTML = pokemonInnerHTML

    poke_container.appendChild(pokemonEl)

    
 
}

fetchPokemons()


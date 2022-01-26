const pokemon_container = document.getElementById('pokemon_container');

const pokemon_number = 150;

const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_number; i++){
        await getPokemon(i);
    }
} 

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const result = await fetch(url);
    const pokemon = await result.json();
    createPokemonCard(pokemon);
}

const createPokemonCard = pokemon => {
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');
    const {id, name, sprites, types} = pokemon;
    const type = types[0].type.name;
    const pokemonInnerHTML = `
        <div class="img-container">
            <img src="${sprites.front_default}" alt="{name}" />
        </div>
        <div class="info">
            <span class="number">${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `;
    pokemonElement.innerHTML = pokemonInnerHTML;
    pokemon_container.appendChild(pokemonElement);
}
fetchPokemons();
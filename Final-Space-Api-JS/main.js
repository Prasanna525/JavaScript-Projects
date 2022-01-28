const character_container = document.getElementById('character_container');

const num_characters = 47;

const fetchCharacters = async () => {
    for(let i = 1; i <= num_characters; i++){
        await getCharacter(i);
    }
}

const getCharacter = async id => {
    const url = `https://finalspaceapi.com/api/v0/character/${id}`;
    const result = await fetch(url);
    const character = await result.json();
    console.log(character);
    createCharacterCard(character);
}

const createCharacterCard = character => {
    const characterElement = document.createElement('div');
    characterElement.classList.add('character');
    const {name, alias, species, origin, img_url} = character;

    const characterInnerHtml = `
    <div class="character-card">
        <div class="img-container">
            <img src="${img_url}" alt="{name}" />
        </div>
        <div class="info">
            <h3 class="name">Name: ${name}</h3>
            <h3 class="alias">Alias: ${alias[0]}</h3>
            <h3 class="species">Species: ${species}</h3>
            <h3 class="origin">Origin: ${origin}</h3>
        </div>
    </div>    
    `;

    characterElement.innerHTML = characterInnerHtml;
    character_container.appendChild(characterElement);
}

fetchCharacters();
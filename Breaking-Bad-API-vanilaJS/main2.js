const characters_container = document.getElementById('characters_container');
const search = document.getElementById('search');

window.addEventListener('load', () => {
    fetchCharacters();
});

search.addEventListener('input', () => {
    let searchQuery = search.value;
    fetchCharacters(searchQuery);
});

async function fetchCharacters(query){
    let fetchResult;

    if(query){
        fetchResult = await fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`);
    }else{
        fetchResult = await fetch('https://www.breakingbadapi.com/api/characters');
    }

    let results = await fetchResult.json();

    characters_container.innerHTML = "";

    results.map(result => {
        const characterInnerHTML = `
        
        <div class="character-box">
            <img src="${result.img}" class="img">
            <div class="info-display">
                <h4>${result.portrayed}</h4>
                <hr>
                <h6>Character: <span>${result.name}</span></h6>
                <h6>Nickname: <span>${result.nickname}</span></h6>
                <h6>Birthday: <span>${result.birthday}</span></h6>
                <h6>Status: <span>${result.status}</span></h6>
            </div>
        </div>
        `;
    
    let characterElement = document.createElement('div');
    characterElement.innerHTML = characterInnerHTML;
    characters_container.appendChild(characterElement);
    });
}


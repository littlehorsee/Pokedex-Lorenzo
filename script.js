const fetchpokemon = async (pokemon) => {
    const APIresposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    const data = await APIresposta.json();
    return data;
}

const pokemonNome = document.querySelector('.nome');
const pokemonNumero = document.querySelector('.numero');
const pokemonImagem = document.querySelector('.imgPokemon');
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const botaoAnterior = document.querySelector('.botaoAnt');
const botaoProximo = document.querySelector('.botaoProx');

let searchpokemon = 1;

const renderpokemon = async (pokemon) => {
    const data = await fetchpokemon(pokemon);

    pokemonNome.innerHTML = data.name;
    pokemonNumero.innerHTML = data.id;
    pokemonImagem.src = data.sprites.versions['generation-v']['black-white'].animated['front_default'];
   
    searchpokemon = data.id;
}

form.addEventListener('submit', (event) => {

    event.preventDefault();
    
    renderpokemon(input.value.toLowerCase());
    input.value = '';

})

botaoAnterior.addEventListener('click', () =>{
    if (searchpokemon > 1){
    searchpokemon -= 1;
    renderpokemon(searchpokemon);
    }
});

botaoProximo.addEventListener('click', () =>{
    searchpokemon += 1;
    renderpokemon(searchpokemon);
});

renderpokemon(searchpokemon);
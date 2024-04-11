import { Pokemon } from "./pokemon.js";

const BASE_URL = `https://pokeapi.co/api/v2/pokemon/`;
let pokemon = {}
const MAX = 1025;


function setPokemon(pokeRequest){
    pokemon = new Pokemon(pokeRequest);
    refreshDom();
}



const searchBtn = document.getElementById("searchBtn");
const sprite = document.getElementById("sprite");
const listInfo = document.getElementById("list");
const nameP = document.getElementById("name");
const idP = document.getElementById("id");
const less = document.getElementById("less");
const more = document.getElementById("more");

less.addEventListener("click", () =>{
        if(pokemon.getId() === 1){
            getPokemon((`${1025}`));
        }else {
            getPokemon((Number(pokemon.getId()) - 1).toString());
        }
   }   

)

more.addEventListener("click", () =>{
    if(pokemon.getId() === 1025){
        getPokemon((`${1}`));
    }else {
        getPokemon((Number(pokemon.getId()) + 1).toString());
    }
}   

)

searchBtn.addEventListener("click", (request) => {
        let inputSearch = document.getElementById("input");
    
        if (inputSearch.value == "") {
            alert("Ensure you input a value!");
          } else {
                let newPokemon = {};
                getPokemon(inputSearch.value.toLowerCase());
            }
} );


function refreshDom(){
    sprite.src = pokemon.getSprite();
    nameP.innerHTML = pokemon.getName();
    idP.innerHTML = pokemon.getId();
    listInfo.innerHTML = pokemon.getInfo();
}
const getPokemon = (search = "pikachu") => {

const fetchPromise = fetch(`${BASE_URL}${search}`);
let newPokemon = {};
fetchPromise.then(response => response.json())
.then(pokemonRequest =>  {
    
    setPokemon(pokemonRequest);
    

}).catch(error =>{
    alert("Plese enter a valid Name or number ID of the pokemon");
    
});


}

function randomPokemon (min,max) {
    let num = Math.floor(Math.random() * (max - min) - min);
    getPokemon(num+ '');

}
randomPokemon(1,MAX);

